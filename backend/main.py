from fastapi import FastAPI

app = FastAPI(
    title="Reel Makers API",
    description="Backend API for Reel Makers",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to Reel Makers API"
    }