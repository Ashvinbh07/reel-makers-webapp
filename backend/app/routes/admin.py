from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import ContactInquiry
from ..schemas import ContactInquiryRead, ContactInquiryStatusUpdate

router = APIRouter(prefix="/api/admin", tags=["admin"])

ALLOWED_INQUIRY_STATUSES = {"new", "contacted", "closed"}


@router.get("/inquiries", response_model=list[ContactInquiryRead])
def get_inquiries(db: Session = Depends(get_db)):
    return (
        db.query(ContactInquiry)
        .order_by(ContactInquiry.created_at.desc())
        .all()
    )


@router.get("/inquiries/{inquiry_id}", response_model=ContactInquiryRead)
def get_inquiry(inquiry_id: int, db: Session = Depends(get_db)):
    inquiry = db.get(ContactInquiry, inquiry_id)

    if inquiry is None:
        raise HTTPException(status_code=404, detail="Inquiry not found")

    return inquiry


@router.patch("/inquiries/{inquiry_id}/status", response_model=ContactInquiryRead)
def update_inquiry_status(
    inquiry_id: int,
    status_update: ContactInquiryStatusUpdate,
    db: Session = Depends(get_db),
):
    status = status_update.status.strip().lower()

    if status not in ALLOWED_INQUIRY_STATUSES:
        raise HTTPException(status_code=400, detail="Invalid inquiry status")

    inquiry = db.get(ContactInquiry, inquiry_id)

    if inquiry is None:
        raise HTTPException(status_code=404, detail="Inquiry not found")

    inquiry.status = status
    db.commit()
    db.refresh(inquiry)

    return inquiry


@router.delete("/inquiries/{inquiry_id}")
def delete_inquiry(inquiry_id: int, db: Session = Depends(get_db)):
    inquiry = db.get(ContactInquiry, inquiry_id)

    if inquiry is None:
        raise HTTPException(status_code=404, detail="Inquiry not found")

    db.delete(inquiry)
    db.commit()

    return {
        "success": True,
        "message": "Inquiry deleted successfully",
    }
