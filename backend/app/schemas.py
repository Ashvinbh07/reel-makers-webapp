from pydantic import BaseModel


class ContactInquiryCreate(BaseModel):
    name: str
    email: str
    phone: str | None = None
    company: str | None = None
    service_required: str | None = None
    budget_range: str | None = None
    message: str


class ContactInquiryResponse(BaseModel):
    success: bool
    message: str
