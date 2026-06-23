from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, String, Text

from .database import Base


class ContactInquiry(Base):
    __tablename__ = "contact_inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=True)
    company = Column(String(255), nullable=True)
    service_required = Column(String(255), nullable=True)
    budget_range = Column(String(100), nullable=True)
    message = Column(Text, nullable=False)
    status = Column(String(50), default="new", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
