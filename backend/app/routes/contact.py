from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..email_utils import logger, send_contact_inquiry_email
from ..models import ContactInquiry
from ..schemas import ContactInquiryCreate, ContactInquiryRead, ContactInquiryResponse

router = APIRouter(prefix="/api", tags=["contact"])


@router.get("/contact", response_model=list[ContactInquiryRead])
def get_contact_inquiries(db: Session = Depends(get_db)):
    return (
        db.query(ContactInquiry)
        .order_by(ContactInquiry.created_at.desc())
        .all()
    )


@router.post("/contact", response_model=ContactInquiryResponse)
def submit_contact_inquiry(
    inquiry: ContactInquiryCreate,
    db: Session = Depends(get_db),
):
    contact_inquiry = ContactInquiry(**inquiry.model_dump())
    db.add(contact_inquiry)
    db.commit()
    db.refresh(contact_inquiry)

    try:
        send_contact_inquiry_email(contact_inquiry)
    except Exception:
        logger.exception("Failed to send contact inquiry notification email.")

    return {
        "success": True,
        "message": "Inquiry submitted successfully",
    }
