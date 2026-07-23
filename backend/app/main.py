from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import inspect, text

from .database import Base, engine
from .routes.admin import router as admin_router
from .routes.contact import router as contact_router

Base.metadata.create_all(bind=engine)


def ensure_contact_inquiry_status_column():
    inspector = inspect(engine)

    if not inspector.has_table("contact_inquiries"):
        return

    columns = {
        column["name"]
        for column in inspector.get_columns("contact_inquiries")
    }

    if "status" in columns:
        return

    with engine.begin() as connection:
        connection.execute(
            text(
                "ALTER TABLE contact_inquiries "
                "ADD COLUMN status VARCHAR(50) NOT NULL DEFAULT 'new'"
            )
        )


ensure_contact_inquiry_status_column()

app = FastAPI(
    title="Reel Makers API",
    description="Backend API for Reel Makers",
    version="1.0.0",
)

allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://reel-makers-webapp.vercel.app",
    "https://reelmakersrm.org",
    "https://www.reelmakersrm.org",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Reel Makers API",
    }


@app.get("/health")
def health_check():
    return {"status": "ok"}


app.include_router(contact_router)
app.include_router(admin_router)
