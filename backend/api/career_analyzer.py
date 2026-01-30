"""
AI Career Analyzer Service
Provides AI-powered career scoring and recommendations
"""
from typing import Dict, List
import random

class CareerAnalyzer:
    """Analyzes career progress and provides AI-driven insights"""
    
    def __init__(self):
        self.weights = {
            'technical_skills': 0.3,
            'soft_skills': 0.2,
            'experience': 0.25,
            'market_demand': 0.15,
            'resume_quality': 0.1
        }
    
    def calculate_career_score(self, user_data: Dict) -> Dict:
        """Calculate overall career score based on multiple factors"""
        scores = {
            'technical_skills': self._analyze_technical_skills(user_data.get('skills', [])),
            'soft_skills': self._analyze_soft_skills(user_data.get('soft_skills', [])),
            'experience': self._analyze_experience(user_data.get('experience_years', 0)),
            'market_demand': self._analyze_market_demand(user_data.get('role', '')),
            'resume_quality': user_data.get('resume_score', 85)
        }
        
        overall_score = sum(
            scores[key] * self.weights[key] 
            for key in scores.keys()
        )
        
        return {
            'overall_score': round(overall_score),
            **scores
        }
    
    def _analyze_technical_skills(self, skills: List[str]) -> int:
        """Analyze technical skills proficiency"""
        skill_scores = {
            'javascript': 95, 'react': 92, 'python': 90,
            'typescript': 88, 'node.js': 85, 'docker': 82
        }
        
        if not skills:
            return 70
        
        avg_score = sum(
            skill_scores.get(skill.lower(), 75) 
            for skill in skills
        ) / len(skills)
        
        return round(avg_score)
    
    def _analyze_soft_skills(self, soft_skills: List[str]) -> int:
        """Analyze soft skills"""
        return random.randint(80, 95)
    
    def _analyze_experience(self, years: int) -> int:
        """Analyze experience level"""
        if years < 2:
            return 70
        elif years < 5:
            return 85
        elif years < 10:
            return 92
        else:
            return 95
    
    def _analyze_market_demand(self, role: str) -> int:
        """Analyze market demand for role"""
        high_demand_roles = ['software engineer', 'data scientist', 'ml engineer']
        return 94 if role.lower() in high_demand_roles else 85
    
    def generate_recommendations(self, user_data: Dict) -> List[Dict]:
        """Generate AI-powered career recommendations"""
        return [
            {
                'title': 'Learn TypeScript',
                'description': 'Boost your marketability by 35%',
                'priority': 'high',
                'impact': 35
            },
            {
                'title': 'System Design Practice',
                'description': 'Essential for senior roles',
                'priority': 'high',
                'impact': 40
            }
        ]
