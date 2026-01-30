from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class User(BaseModel):
    id: Optional[str] = None
    email: EmailStr
    name: str
    role: Optional[str] = "Software Engineer"
    career_level: Optional[str] = "Mid-Senior"
    created_at: Optional[datetime] = None

class UserProfile(BaseModel):
    user_id: str
    skills: List[str] = []
    experience_years: int
    desired_role: Optional[str] = None
    location: Optional[str] = None
    salary_expectation: Optional[int] = None
    preferences: Optional[dict] = {}
