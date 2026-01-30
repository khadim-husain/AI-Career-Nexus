# In-Memory JSON Store
# Stores the latest parsed resume data

from typing import Optional
from models.resume import ResumeData

class JSONStore:
    """Simple in-memory storage for resume data"""
    
    _instance = None
    _resume_data: Optional[ResumeData] = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(JSONStore, cls).__new__(cls)
        return cls._instance
    
    @classmethod
    def save_resume(cls, resume_data: ResumeData) -> None:
        """Save resume data to memory"""
        cls._resume_data = resume_data
    
    @classmethod
    def get_resume(cls) -> Optional[ResumeData]:
        """Retrieve stored resume data"""
        return cls._resume_data
    
    @classmethod
    def clear_resume(cls) -> None:
        """Clear stored resume data"""
        cls._resume_data = None
    
    @classmethod
    def has_resume(cls) -> bool:
        """Check if resume data exists"""
        return cls._resume_data is not None

# Create singleton instance
json_store = JSONStore()
