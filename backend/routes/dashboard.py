from fastapi import APIRouter, HTTPException
from models.career import CareerScore, CareerProgress, SkillDistribution, AIRecommendation
from typing import List

router = APIRouter()

@router.get("/score", response_model=CareerScore)
async def get_career_score():
    """Get AI-calculated career score"""
    return CareerScore(
        overall_score=92,
        technical_skills=95,
        soft_skills=88,
        experience=92,
        market_demand=94,
        resume_quality=87,
        growth_trend=8
    )

@router.get("/progress", response_model=List[CareerProgress])
async def get_career_progress():
    """Get career progress tracking"""
    return [
        CareerProgress(
            task_name="Resume Updated",
            progress=100,
            status="completed",
            last_updated="2 days ago"
        ),
        CareerProgress(
            task_name="Skill Gap Analysis",
            progress=65,
            status="in-progress",
            last_updated="Today"
        ),
        CareerProgress(
            task_name="Interview Prep",
            progress=40,
            status="in-progress",
            last_updated="1 day ago"
        ),
        CareerProgress(
            task_name="Job Applications",
            progress=80,
            status="in-progress",
            last_updated="Today"
        )
    ]

@router.get("/skills/distribution", response_model=List[SkillDistribution])
async def get_skill_distribution():
    """Get skill distribution data"""
    return [
        SkillDistribution(skill_name="JavaScript", percentage=95, category="frontend"),
        SkillDistribution(skill_name="React", percentage=92, category="frontend"),
        SkillDistribution(skill_name="Python", percentage=88, category="backend"),
        SkillDistribution(skill_name="AI/ML", percentage=85, category="ai")
    ]

@router.get("/recommendations", response_model=List[AIRecommendation])
async def get_ai_recommendations():
    """Get AI-powered career recommendations"""
    return [
        AIRecommendation(
            title="Learn TypeScript",
            description="Based on your career goals, TypeScript will boost your marketability by 35%",
            action="Start Learning",
            priority="high",
            estimated_impact=35
        ),
        AIRecommendation(
            title="Apply to Google",
            description="You have a 78% match for Senior Frontend Developer at Google",
            action="View Job",
            priority="high",
            estimated_impact=78
        ),
        AIRecommendation(
            title="Practice Interviews",
            description="Improve your system design answers with AI mock interviews",
            action="Start Session",
            priority="medium",
            estimated_impact=60
        )
    ]
