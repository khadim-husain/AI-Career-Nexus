# Resume Upload Routes
# Handles file upload and resume data retrieval endpoints

from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from typing import Dict, List
from services.text_extractor import TextExtractor
from services.resume_parser_service import ResumeParserService
from utils.json_store import json_store
from models.resume import ResumeData

router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    """
    Upload a resume (PDF or image) and extract structured data
    
    Returns:
        Structured JSON with all resume information
    """
    
    # Validate file type
    allowed_types = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/tiff']
    
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"File type not supported. Allowed types: PDF, JPG, PNG, BMP, TIFF. Got: {file.content_type}"
        )
    
    try:
        # Read file content
        file_content = await file.read()
        
        # Extract text from file
        extracted_text = await TextExtractor.extract_text(file_content, file.content_type)
        
        if not extracted_text or len(extracted_text.strip()) < 50:
            raise HTTPException(
                status_code=400,
                detail="Could not extract sufficient text from the file. Please ensure the file is readable."
            )
        
        # Parse extracted text into structured JSON
        resume_data = ResumeParserService.parse_resume_text(extracted_text)
        
        # Save to in-memory store
        json_store.save_resume(resume_data)
        
        return {
            "success": True,
            "message": "Resume uploaded and parsed successfully",
            "data": resume_data.dict(),
            "metadata": {
                "filename": file.filename,
                "file_type": file.content_type,
                "extracted_text_length": len(extracted_text)
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing resume: {str(e)}"
        )


@router.post("/resume/parse-json")
async def parse_json_resume(resume_json: Dict):
    """
    Parse resume data from JSON format
    
    Args:
        resume_json: Resume data in JSON format
    
    Returns:
        Structured resume data with analysis
    """
    try:
        # Validate and create ResumeData from JSON
        resume_data = ResumeData(**resume_json)
        
        # Save to in-memory store
        json_store.save_resume(resume_data)
        
        return {
            "success": True,
            "message": "Resume parsed successfully",
            "data": resume_data.dict(),
            "analysis": {
                "total_skills": sum([
                    len(resume_data.skills.programming_languages),
                    len(resume_data.skills.web_technologies),
                    len(resume_data.skills.tools_and_technologies),
                    len(resume_data.skills.soft_skills)
                ]),
                "overall_score": 87  # This could be calculated based on resume completeness
            }
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Error parsing resume JSON: {str(e)}"
        )


@router.get("/resume", response_model=Dict)
async def get_resume():
    """
    Get the latest uploaded resume data
    
    Returns:
        Complete structured resume JSON
    """
    
    resume_data = json_store.get_resume()
    
    if not resume_data:
        raise HTTPException(
            status_code=404,
            detail="No resume data found. Please upload a resume first."
        )
    
    return {
        "success": True,
        "data": resume_data.dict()
    }


@router.get("/resume/skills")
async def get_skills():
    """
    Get only the skills section from resume
    
    Returns:
        Skills data (programming, web technologies, tools, soft skills)
    """
    
    resume_data = json_store.get_resume()
    
    if not resume_data:
        raise HTTPException(
            status_code=404,
            detail="No resume data found. Please upload a resume first."
        )
    
    return {
        "success": True,
        "data": resume_data.skills.dict()
    }


@router.get("/resume/experience")
async def get_experience():
    """
    Get only the experience section from resume
    
    Returns:
        List of work experiences
    """
    
    resume_data = json_store.get_resume()
    
    if not resume_data:
        raise HTTPException(
            status_code=404,
            detail="No resume data found. Please upload a resume first."
        )
    
    return {
        "success": True,
        "data": [exp.dict() for exp in resume_data.experience]
    }


@router.get("/resume/education")
async def get_education():
    """
    Get only the education section from resume
    
    Returns:
        List of educational qualifications
    """
    
    resume_data = json_store.get_resume()
    
    if not resume_data:
        raise HTTPException(
            status_code=404,
            detail="No resume data found. Please upload a resume first."
        )
    
    return {
        "success": True,
        "data": [edu.dict() for edu in resume_data.education]
    }


@router.get("/resume/contact")
async def get_contact():
    """
    Get contact information from resume
    
    Returns:
        Contact details (phone, email, location)
    """
    
    resume_data = json_store.get_resume()
    
    if not resume_data:
        raise HTTPException(
            status_code=404,
            detail="No resume data found. Please upload a resume first."
        )
    
    return {
        "success": True,
        "data": resume_data.contact.dict()
    }


@router.delete("/resume")
async def delete_resume():
    """
    Clear stored resume data
    
    Returns:
        Success message
    """
    
    json_store.clear_resume()
    
    return {
        "success": True,
        "message": "Resume data cleared successfully"
    }
