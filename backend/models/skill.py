from pydantic import BaseModel
from typing import List, Optional

class Skill(BaseModel):
    name: str
    level: int  # 0-100
    category: str  # "frontend", "backend", "ai/ml", etc.
    years_of_experience: Optional[float] = 0

class SkillMatch(BaseModel):
    job_title: str
    company: str
    match_percentage: int
    required_skills: List[str]
    matched_skills: List[str]
    missing_skills: List[str]
    salary_range: Optional[str] = None
    location: Optional[str] = None

class SkillGap(BaseModel):
    current_skills: List[Skill]
    target_role: str
    missing_skills: List[str]
    improvement_suggestions: List[str]
    estimated_learning_time: str
