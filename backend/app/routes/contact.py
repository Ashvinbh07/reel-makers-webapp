from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import ContactInquiry
from ..schemas import ContactInquiryCreate, ContactInquiryResponse

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactInquiryResponse)
def submit_contact_inquiry(
    inquiry: ContactInquiryCreate,
    db: Session = Depends(get_db),
):
    contact_inquiry = ContactInquiry(**inquiry.model_dump())
    db.add(contact_inquiry)
    db.commit()

    return {
        "success": True,
        "message": "Inquiry submitted successfully",
    }
