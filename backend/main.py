from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import skill_matcher, resume_analyzer, ai_coach, skill_gap, dashboard, resume_upload, auth
from database import init_db

# Initialize database
init_db()

app = FastAPI(
    title="AI Career Nexus API",
    description="Ultra-Premium AI Career Guidance Platform Backend",
    version="1.0.0"
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["Dashboard"])
app.include_router(skill_matcher.router, prefix="/api/skill-matcher", tags=["Skill Matcher"])
app.include_router(resume_analyzer.router, prefix="/api/resume-analyzer", tags=["Resume Analyzer"])
app.include_router(resume_upload.router, prefix="/api", tags=["Resume Upload & Parser"])
app.include_router(ai_coach.router, prefix="/api/ai-coach", tags=["AI Coach"])
app.include_router(skill_gap.router, prefix="/api/skill-gap", tags=["Skill Gap"])

@app.get("/")
async def root():
    return {
        "message": "AI Career Nexus API",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
