from datetime import datetime
import re

from pydantic import BaseModel, field_validator

EMAIL_PATTERN = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class ContactInquiryCreate(BaseModel):
    name: str
    email: str
    phone: str
    company: str | None = None
    service_required: str | None = None
    budget_range: str | None = None
    message: str

    @field_validator("name", "email", "phone", "message", mode="before")
    @classmethod
    def required_fields_must_not_be_blank(cls, value: str, info):
        if not isinstance(value, str) or not value.strip():
            raise ValueError(f"{info.field_name} is required")

        return value.strip()

    @field_validator("company", "service_required", "budget_range", mode="before")
    @classmethod
    def optional_fields_may_be_blank(cls, value: str | None):
        if value is None:
            return None

        if not isinstance(value, str):
            return value

        stripped_value = value.strip()
        return stripped_value or None

    @field_validator("email")
    @classmethod
    def email_must_be_valid(cls, value: str):
        if not EMAIL_PATTERN.match(value):
            raise ValueError("Please enter a valid email address.")

        return value

    @field_validator("phone")
    @classmethod
    def phone_must_be_valid(cls, value: str):
        cleaned_phone = re.sub(r"[\s\-\(\)\[\]\{\}]", "", value)

        if cleaned_phone.startswith("+"):
            cleaned_phone = cleaned_phone[1:]

        if not cleaned_phone.isdigit() or not 10 <= len(cleaned_phone) <= 15:
            raise ValueError("Please enter a valid phone number.")

        return cleaned_phone


class ContactInquiryResponse(BaseModel):
    success: bool
    message: str


class ContactInquiryRead(BaseModel):
    id: int
    name: str
    email: str
    phone: str | None = None
    company: str | None = None
    service_required: str | None = None
    budget_range: str | None = None
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


class ContactInquiryStatusUpdate(BaseModel):
    status: str
