from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    suggestions: List[str] = []
    session_id: str

@router.post("/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    """Chat with AI career coach"""
    
    # Mock AI response - replace with actual AI integration (OpenAI, Anthropic, etc.)
    user_message = request.messages[-1].content.lower()
    
    response = ""
    suggestions = []
    
    if "resume" in user_message:
        response = "I'd be happy to help with your resume! I can analyze it for ATS compatibility, suggest improvements, and help you tailor it for specific jobs. Would you like to upload your resume for analysis?"
        suggestions = [
            "Upload my resume",
            "Resume tips for tech roles",
            "How to optimize for ATS"
        ]
    elif "interview" in user_message:
        response = "Great! I can help you prepare for interviews. I offer mock interviews, common question practice, and personalized feedback. What type of interview are you preparing for?"
        suggestions = [
            "Technical interview prep",
            "Behavioral questions",
            "System design practice"
        ]
    elif "job" in user_message or "career" in user_message:
        response = "I can help you find the perfect career path! Based on your skills, I can recommend roles, companies, and growth opportunities. Tell me about your current skills and career goals."
        suggestions = [
            "Analyze my skills",
            "Career path options",
            "Salary expectations"
        ]
    else:
        response = "Hello! I'm your AI Career Coach. I can help you with resume optimization, interview preparation, skill development, and career planning. What would you like to work on today?"
        suggestions = [
            "Improve my resume",
            "Practice interviews",
            "Find jobs matching my skills",
            "Learn new skills"
        ]
    
    return ChatResponse(
        response=response,
        suggestions=suggestions,
        session_id=request.session_id or "session_123"
    )

@router.get("/interview-questions", response_model=List[dict])
async def get_interview_questions(role: str = "Software Engineer"):
    """Get common interview questions for a role"""
    return [
        {
            "question": "Tell me about yourself and your background",
            "category": "behavioral",
            "difficulty": "easy"
        },
        {
            "question": "Explain the difference between let, const, and var in JavaScript",
            "category": "technical",
            "difficulty": "medium"
        },
        {
            "question": "Design a URL shortening service like bit.ly",
            "category": "system-design",
            "difficulty": "hard"
        }
    ]

@router.post("/mock-interview", response_model=dict)
async def start_mock_interview(role: str, difficulty: str = "medium"):
    """Start an AI mock interview session"""
    return {
        "session_id": "mock_interview_456",
        "role": role,
        "difficulty": difficulty,
        "first_question": "Tell me about a challenging project you worked on and how you overcame obstacles.",
        "total_questions": 10
    }
