from fastapi import APIRouter, HTTPException
from models.skill import SkillGap, Skill
from typing import List
from pydantic import BaseModel

router = APIRouter()

class SkillGapRequest(BaseModel):
    current_skills: List[str]
    target_role: str

@router.post("/analyze", response_model=SkillGap)
async def analyze_skill_gap(request: SkillGapRequest):
    """Analyze skill gaps for target role"""
    
    # Mock skill gap analysis - replace with actual AI analysis
    current_skills_models = [
        Skill(name=skill, level=85, category="technical", years_of_experience=3)
        for skill in request.current_skills
    ]
    
    return SkillGap(
        current_skills=current_skills_models,
        target_role=request.target_role,
        missing_skills=[
            "TypeScript",
            "Docker",
            "Kubernetes",
            "System Design",
            "GraphQL"
        ],
        improvement_suggestions=[
            "Complete TypeScript course on Udemy (4-6 weeks)",
            "Build projects with Docker containerization (2-3 weeks)",
            "Study system design patterns and case studies (6-8 weeks)",
            "Learn GraphQL through hands-on API development (3-4 weeks)",
            "Practice Kubernetes deployment with minikube (4-5 weeks)"
        ],
        estimated_learning_time="4-6 months of focused learning"
    )

@router.get("/learning-paths", response_model=List[dict])
async def get_learning_paths(role: str = "Software Engineer"):
    """Get curated learning paths for a role"""
    return [
        {
            "skill": "TypeScript",
            "importance": "High",
            "resources": [
                {
                    "title": "TypeScript Deep Dive",
                    "type": "Book",
                    "url": "https://basarat.gitbook.io/typescript/",
                    "duration": "2-3 weeks"
                },
                {
                    "title": "Understanding TypeScript",
                    "type": "Course",
                    "platform": "Udemy",
                    "duration": "4 weeks"
                }
            ]
        },
        {
            "skill": "System Design",
            "importance": "High",
            "resources": [
                {
                    "title": "System Design Interview",
                    "type": "Book",
                    "duration": "6-8 weeks"
                },
                {
                    "title": "Grokking System Design",
                    "type": "Course",
                    "platform": "Educative",
                    "duration": "8 weeks"
                }
            ]
        }
    ]

@router.get("/progress-tracking", response_model=List[dict])
async def get_learning_progress():
    """Track learning progress for skills"""
    return [
        {
            "skill": "TypeScript",
            "progress": 65,
            "status": "in-progress",
            "started_at": "2024-11-01",
            "expected_completion": "2024-12-15"
        },
        {
            "skill": "Docker",
            "progress": 40,
            "status": "in-progress",
            "started_at": "2024-11-15",
            "expected_completion": "2024-12-30"
        }
    ]

@router.get("/skill-demand", response_model=List[dict])
async def get_skill_market_demand():
    """Get market demand data for skills"""
    return [
        {
            "skill": "TypeScript",
            "demand_score": 95,
            "trend": "increasing",
            "avg_salary_impact": "+15%",
            "job_openings": 45000
        },
        {
            "skill": "React",
            "demand_score": 98,
            "trend": "stable",
            "avg_salary_impact": "+20%",
            "job_openings": 60000
        },
        {
            "skill": "Python",
            "demand_score": 92,
            "trend": "increasing",
            "avg_salary_impact": "+12%",
            "job_openings": 75000
        }
    ]
