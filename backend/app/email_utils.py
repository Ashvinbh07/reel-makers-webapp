import logging
import os
import smtplib
from email.message import EmailMessage

from .models import ContactInquiry

logger = logging.getLogger(__name__)


def send_contact_inquiry_email(inquiry: ContactInquiry) -> None:
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    receiver_email = os.getenv("CONTACT_RECEIVER_EMAIL")

    if not all([smtp_host, smtp_user, smtp_password, receiver_email]):
        logger.warning("Contact inquiry email skipped: SMTP settings are incomplete.")
        return

    message = EmailMessage()
    message["Subject"] = "New Reel Makers Inquiry"
    message["From"] = smtp_user
    message["To"] = receiver_email
    message.set_content(
        "\n".join(
            [
                "New Reel Makers Inquiry",
                "",
                f"Name: {inquiry.name}",
                f"Email: {inquiry.email}",
                f"Phone: {inquiry.phone or ''}",
                f"Company: {inquiry.company or ''}",
                f"Service Required: {inquiry.service_required or ''}",
                f"Budget Range: {inquiry.budget_range or ''}",
                f"Message: {inquiry.message}",
                f"Created At: {inquiry.created_at}",
            ]
        )
    )

    with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(message)
