from fastapi import APIRouter, UploadFile, File, HTTPException
from models.resume import ResumeAnalysis, ResumeImprovement, ResumeData
from typing import List
import PyPDF2
import io
import json

router = APIRouter()

@router.post("/parse-json", response_model=dict)
async def parse_resume_json(resume_data: ResumeData):
    """Parse and store structured resume JSON data"""
    
    # Calculate scores based on resume data
    total_skills = (
        len(resume_data.skills.programming_languages) +
        len(resume_data.skills.web_technologies) +
        len(resume_data.skills.tools_and_technologies) +
        len(resume_data.skills.soft_skills)
    )
    
    experience_years = len(resume_data.experience)
    education_level = len(resume_data.education)
    
    # Generate analysis
    overall_score = min(100, 70 + total_skills + (experience_years * 5) + (education_level * 3))
    
    return {
        "success": True,
        "message": "Resume parsed successfully",
        "data": resume_data.dict(),
        "analysis": {
            "overall_score": overall_score,
            "total_skills": total_skills,
            "experience_count": experience_years,
            "education_count": education_level,
            "profile_completeness": 95 if resume_data.about_me else 80
        }
    }

@router.post("/upload", response_model=ResumeAnalysis)
async def analyze_resume(file: UploadFile = File(...)):
    """Upload and analyze resume"""
    
    if not file.filename.endswith(('.pdf', '.docx')):
        raise HTTPException(status_code=400, detail="Only PDF and DOCX files are supported")
    
    # Mock analysis - replace with actual AI analysis
    return ResumeAnalysis(
        overall_score=87,
        strengths=[
            "Strong technical skills section",
            "Quantifiable achievements",
            "Clear project descriptions",
            "Good use of action verbs"
        ],
        weaknesses=[
            "Missing keywords for ATS optimization",
            "Inconsistent formatting in experience section",
            "Summary could be more impactful"
        ],
        improvements=[
            "Add more industry-specific keywords",
            "Standardize bullet point format",
            "Include metrics in all achievements",
            "Optimize for ATS scanning"
        ],
        keyword_match=75,
        formatting_score=82,
        content_score=90,
        ats_compatibility=78,
        sections_analysis={
            "summary": {"score": 70, "suggestions": ["Make it more compelling", "Add key achievements"]},
            "experience": {"score": 85, "suggestions": ["Add more metrics"]},
            "skills": {"score": 90, "suggestions": ["Great technical coverage"]},
            "education": {"score": 80, "suggestions": ["Include relevant coursework"]}
        }
    )

@router.post("/improve", response_model=List[ResumeImprovement])
async def improve_resume_section(section: str, content: str):
    """Get AI-powered resume improvement suggestions"""
    
    # Mock improvements - replace with actual AI generation
    return [
        ResumeImprovement(
            section=section,
            current_text=content,
            improved_text="Enhanced version with better action verbs and quantifiable results",
            reasoning="Added metrics and strengthened impact statements"
        )
    ]

@router.get("/templates", response_model=List[dict])
async def get_resume_templates():
    """Get resume templates"""
    return [
        {
            "id": "modern-tech",
            "name": "Modern Tech Resume",
            "description": "Clean, ATS-friendly template for tech professionals",
            "preview_url": "/templates/modern-tech.png"
        },
        {
            "id": "executive",
            "name": "Executive Resume",
            "description": "Professional template for senior positions",
            "preview_url": "/templates/executive.png"
        }
    ]
