"""
AI Skill Matcher
Matches user skills with job opportunities
"""
from typing import Dict, List
import random

class SkillMatcherAI:
    """AI-powered skill matching engine"""
    
    def __init__(self):
        self.job_database = self._init_job_database()
    
    def _init_job_database(self) -> List[Dict]:
        """Initialize mock job database"""
        return [
            {
                'title': 'Senior Frontend Developer',
                'company': 'Google',
                'required_skills': ['JavaScript', 'React', 'TypeScript', 'Node.js'],
                'salary_range': '$150k - $200k',
                'location': 'Mountain View, CA'
            },
            {
                'title': 'Full Stack Engineer',
                'company': 'Meta',
                'required_skills': ['JavaScript', 'React', 'Python', 'GraphQL'],
                'salary_range': '$160k - $210k',
                'location': 'Menlo Park, CA'
            },
            {
                'title': 'React Developer',
                'company': 'Amazon',
                'required_skills': ['JavaScript', 'React', 'AWS', 'Redux'],
                'salary_range': '$140k - $190k',
                'location': 'Seattle, WA'
            },
            {
                'title': 'Frontend Engineer',
                'company': 'Netflix',
                'required_skills': ['JavaScript', 'React', 'TypeScript', 'GraphQL'],
                'salary_range': '$155k - $205k',
                'location': 'Los Gatos, CA'
            }
        ]
    
    def match_skills(self, user_skills: List[str], desired_role: str = None) -> List[Dict]:
        """Match user skills with available jobs"""
        matches = []
        
        for job in self.job_database:
            if desired_role and desired_role.lower() not in job['title'].lower():
                continue
            
            match_data = self._calculate_match(user_skills, job)
            matches.append(match_data)
        
        # Sort by match percentage
        matches.sort(key=lambda x: x['match_percentage'], reverse=True)
        return matches
    
    def _calculate_match(self, user_skills: List[str], job: Dict) -> Dict:
        """Calculate match percentage between user skills and job requirements"""
        user_skills_lower = [s.lower() for s in user_skills]
        required_skills = job['required_skills']
        required_lower = [s.lower() for s in required_skills]
        
        matched = [s for s in required_lower if s in user_skills_lower]
        missing = [s for s in required_skills if s.lower() not in user_skills_lower]
        
        match_percentage = round((len(matched) / len(required_skills)) * 100) if required_skills else 0
        
        return {
            'job_title': job['title'],
            'company': job['company'],
            'match_percentage': match_percentage,
            'required_skills': required_skills,
            'matched_skills': [s for s in required_skills if s.lower() in user_skills_lower],
            'missing_skills': missing,
            'salary_range': job['salary_range'],
            'location': job['location']
        }
    
    def get_skill_recommendations(self, current_skills: List[str], target_role: str) -> Dict:
        """Get skill recommendations for target role"""
        # Find all jobs matching target role
        matching_jobs = [
            job for job in self.job_database 
            if target_role.lower() in job['title'].lower()
        ]
        
        if not matching_jobs:
            return {'missing_skills': [], 'recommendations': []}
        
        # Aggregate all required skills
        all_required_skills = set()
        for job in matching_jobs:
            all_required_skills.update(job['required_skills'])
        
        current_skills_lower = [s.lower() for s in current_skills]
        missing_skills = [
            skill for skill in all_required_skills 
            if skill.lower() not in current_skills_lower
        ]
        
        return {
            'missing_skills': missing_skills,
            'recommendations': self._generate_learning_path(missing_skills)
        }
    
    def _generate_learning_path(self, skills: List[str]) -> List[Dict]:
        """Generate learning recommendations for skills"""
        return [
            {
                'skill': skill,
                'priority': 'high' if i < 3 else 'medium',
                'estimated_time': f'{random.randint(2, 8)} weeks',
                'resources': [
                    {'type': 'course', 'platform': 'Udemy'},
                    {'type': 'documentation', 'platform': 'Official Docs'}
                ]
            }
            for i, skill in enumerate(skills[:5])  # Top 5 skills
        ]
