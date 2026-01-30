from .dashboard import router as dashboard_router
from .skill_matcher import router as skill_matcher_router
from .resume_analyzer import router as resume_analyzer_router
from .ai_coach import router as ai_coach_router
from .skill_gap import router as skill_gap_router

__all__ = [
    "dashboard_router",
    "skill_matcher_router",
    "resume_analyzer_router",
    "ai_coach_router",
    "skill_gap_router"
]
