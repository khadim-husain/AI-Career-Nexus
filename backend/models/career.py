from pydantic import BaseModel
from typing import List, Optional

class CareerScore(BaseModel):
    overall_score: int  # 0-100
    technical_skills: int
    soft_skills: int
    experience: int
    market_demand: int
    resume_quality: int
    growth_trend: int
    
class CareerProgress(BaseModel):
    task_name: str
    progress: int  # 0-100
    status: str  # "completed", "in-progress", "pending"
    last_updated: str
    
class SkillDistribution(BaseModel):
    skill_name: str
    percentage: int
    category: str
    
class AIRecommendation(BaseModel):
    title: str
    description: str
    action: str
    priority: str  # "high", "medium", "low"
    estimated_impact: int  # 0-100
