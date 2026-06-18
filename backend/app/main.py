from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from .routes.contact import router as contact_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Reel Makers API",
    description="Backend API for Reel Makers",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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
