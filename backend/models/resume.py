from pydantic import BaseModel
from typing import List, Optional, Dict

class ContactInfo(BaseModel):
    phone: str
    location: str
    email: str

class Education(BaseModel):
    year: str
    degree: str
    institution: str
    details: str

class Experience(BaseModel):
    duration: str
    role: str
    company: str
    details: str

class Skills(BaseModel):
    programming_languages: List[str]
    web_technologies: List[str]
    tools_and_technologies: List[str]
    soft_skills: List[str]

class ResumeData(BaseModel):
    name: str
    title: str
    contact: ContactInfo
    about_me: str
    education: List[Education]
    experience: List[Experience]
    skills: Skills

class Resume(BaseModel):
    filename: str
    file_type: str  # pdf, docx
    content: str
    uploaded_at: Optional[str] = None

class ResumeAnalysis(BaseModel):
    overall_score: int  # 0-100
    strengths: List[str]
    weaknesses: List[str]
    improvements: List[str]
    keyword_match: int
    formatting_score: int
    content_score: int
    ats_compatibility: int
    sections_analysis: Dict[str, dict]
    
class ResumeImprovement(BaseModel):
    section: str
    current_text: str
    improved_text: str
    reasoning: str
