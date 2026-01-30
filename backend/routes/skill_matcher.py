from fastapi import APIRouter, HTTPException
from models.skill import SkillMatch, SkillGap, Skill
from typing import List
from pydantic import BaseModel

router = APIRouter()

class JobSearchRequest(BaseModel):
    skills: List[str]
    desired_role: str
    location: str = ""

@router.post("/match", response_model=List[SkillMatch])
async def match_skills(request: JobSearchRequest):
    """Match user skills with job opportunities"""
    # Mock data - replace with actual AI matching logic
    return [
        SkillMatch(
            job_title="Senior Frontend Developer",
            company="Google",
            match_percentage=78,
            required_skills=["JavaScript", "React", "TypeScript", "Node.js"],
            matched_skills=["JavaScript", "React"],
            missing_skills=["TypeScript"],
            salary_range="$150k - $200k",
            location="Mountain View, CA"
        ),
        SkillMatch(
            job_title="Full Stack Engineer",
            company="Meta",
            match_percentage=85,
            required_skills=["JavaScript", "React", "Python", "GraphQL"],
            matched_skills=["JavaScript", "React", "Python"],
            missing_skills=["GraphQL"],
            salary_range="$160k - $210k",
            location="Menlo Park, CA"
        ),
        SkillMatch(
            job_title="React Developer",
            company="Amazon",
            match_percentage=92,
            required_skills=["JavaScript", "React", "AWS", "Redux"],
            matched_skills=["JavaScript", "React"],
            missing_skills=["AWS"],
            salary_range="$140k - $190k",
            location="Seattle, WA"
        )
    ]

@router.get("/trending-skills", response_model=List[str])
async def get_trending_skills():
    """Get trending skills in the market"""
    return [
        "TypeScript",
        "Next.js",
        "Docker",
        "Kubernetes",
        "GraphQL",
        "React Native",
        "Tailwind CSS",
        "FastAPI"
    ]
