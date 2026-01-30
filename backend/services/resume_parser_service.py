# Resume Parser Service
# Converts extracted text into structured JSON format

import re
from typing import Dict, List
from models.resume import ResumeData, ContactInfo, Education, Experience, Skills

class ResumeParserService:
    """Service to parse resume text into structured JSON"""
    
    @staticmethod
    def parse_resume_text(text: str) -> ResumeData:
        """
        Parse resume text and convert to structured JSON
        
        Args:
            text: Extracted resume text
            
        Returns:
            ResumeData object with structured information
        """
        
        # Extract name (usually first line or prominent)
        name = ResumeParserService._extract_name(text)
        
        # Extract title/designation
        title = ResumeParserService._extract_title(text)
        
        # Extract contact information
        contact = ResumeParserService._extract_contact(text)
        
        # Extract about me / summary
        about_me = ResumeParserService._extract_about_me(text)
        
        # Extract education
        education = ResumeParserService._extract_education(text)
        
        # Extract experience
        experience = ResumeParserService._extract_experience(text)
        
        # Extract skills
        skills = ResumeParserService._extract_skills(text)
        
        return ResumeData(
            name=name,
            title=title,
            contact=contact,
            about_me=about_me,
            education=education,
            experience=experience,
            skills=skills
        )
    
    @staticmethod
    def _extract_name(text: str) -> str:
        """Extract candidate name from resume text"""
        lines = text.split('\n')
        # Usually name is in the first few lines, often the first line
        for line in lines[:5]:
            line = line.strip()
            # Name is usually short (2-4 words) and doesn't contain numbers
            if line and len(line.split()) <= 4 and not re.search(r'\d', line):
                if len(line) > 3 and not any(keyword in line.lower() for keyword in ['resume', 'cv', 'curriculum']):
                    return line
        return "Not Found"
    
    @staticmethod
    def _extract_title(text: str) -> str:
        """Extract job title/designation"""
        # Common title patterns
        title_patterns = [
            r'(?:software|web|full stack|frontend|backend|data|senior|junior)\s+(?:developer|engineer|analyst|scientist)',
            r'(?:project manager|product manager|business analyst)',
            r'(?:designer|architect|consultant|specialist)',
        ]
        
        for pattern in title_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group().title()
        
        return "Professional"
    
    @staticmethod
    def _extract_contact(text: str) -> ContactInfo:
        """Extract contact information"""
        # Extract email
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        email_match = re.search(email_pattern, text)
        email = email_match.group() if email_match else ""
        
        # Extract phone
        phone_patterns = [
            r'\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}',  # US format
            r'\+?\d{1,3}[-.\s]?\d{10}',  # Indian format
            r'\(\d{3}\)\s*\d{3}[-.\s]?\d{4}'  # Another US format
        ]
        phone = ""
        for pattern in phone_patterns:
            phone_match = re.search(pattern, text)
            if phone_match:
                phone = phone_match.group()
                break
        
        # Extract location (city, state, country)
        location_patterns = [
            r'(?:Location|Address|City)[\s:]+([^\n]+)',
            r'([A-Z][a-z]+(?:\s[A-Z][a-z]+)*,\s*[A-Z]{2})',  # City, ST
            r'([A-Z][a-z]+,\s*[A-Z][a-z]+)'  # City, Country
        ]
        location = ""
        for pattern in location_patterns:
            location_match = re.search(pattern, text, re.IGNORECASE)
            if location_match:
                location = location_match.group(1).strip()
                break
        
        return ContactInfo(
            phone=phone,
            location=location if location else "Not Specified",
            email=email
        )
    
    @staticmethod
    def _extract_about_me(text: str) -> str:
        """Extract professional summary or about me section"""
        # Look for summary section
        summary_patterns = [
            r'(?:SUMMARY|PROFESSIONAL SUMMARY|ABOUT ME|OBJECTIVE|PROFILE)[\s:]+([^\n]{100,500})',
            r'(?:Summary|About)[\s:]+([^\n]{100,500})'
        ]
        
        for pattern in summary_patterns:
            match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
            if match:
                summary = match.group(1).strip()
                # Clean up the summary
                summary = re.sub(r'\s+', ' ', summary)
                return summary[:500]  # Limit to 500 chars
        
        return ""
    
    @staticmethod
    def _extract_education(text: str) -> List[Education]:
        """Extract education details"""
        education_list = []
        
        # Find education section
        education_section = re.search(
            r'(?:EDUCATION|ACADEMIC|QUALIFICATION)(.*?)(?:EXPERIENCE|WORK|SKILLS|PROJECTS|$)',
            text,
            re.IGNORECASE | re.DOTALL
        )
        
        if not education_section:
            return education_list
        
        edu_text = education_section.group(1)
        
        # Common degree patterns
        degree_patterns = [
            r'(Bachelor|Master|Ph\.?D|MBA|B\.?Tech|M\.?Tech|B\.?Sc|M\.?Sc|BCA|MCA)',
            r'(Diploma|Associate|Certificate)'
        ]
        
        lines = edu_text.split('\n')
        current_edu = {}
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Check for degree
            for pattern in degree_patterns:
                if re.search(pattern, line, re.IGNORECASE):
                    if current_edu:
                        education_list.append(Education(**current_edu))
                    
                    current_edu = {
                        'degree': line,
                        'institution': '',
                        'year': '',
                        'details': ''
                    }
                    break
            
            # Extract year
            year_match = re.search(r'(20\d{2}\s*-\s*20\d{2}|20\d{2}\s*-\s*Present|20\d{2})', line)
            if year_match and current_edu:
                current_edu['year'] = year_match.group()
            
            # Extract institution (usually contains 'University', 'College', 'Institute')
            if any(word in line for word in ['University', 'College', 'Institute', 'School']) and current_edu:
                current_edu['institution'] = line
        
        if current_edu:
            education_list.append(Education(**current_edu))
        
        return education_list
    
    @staticmethod
    def _extract_experience(text: str) -> List[Experience]:
        """Extract work experience"""
        experience_list = []
        
        # Find experience section
        exp_section = re.search(
            r'(?:EXPERIENCE|WORK EXPERIENCE|EMPLOYMENT|WORK HISTORY)(.*?)(?:EDUCATION|SKILLS|PROJECTS|$)',
            text,
            re.IGNORECASE | re.DOTALL
        )
        
        if not exp_section:
            return experience_list
        
        exp_text = exp_section.group(1)
        
        # Look for job titles and companies
        lines = exp_text.split('\n')
        current_exp = {}
        
        for i, line in enumerate(lines):
            line = line.strip()
            if not line:
                continue
            
            # Check for duration pattern
            duration_match = re.search(
                r'((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2}\s*-\s*(?:Present|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2}))',
                line,
                re.IGNORECASE
            )
            
            if duration_match:
                if current_exp:
                    experience_list.append(Experience(**current_exp))
                
                current_exp = {
                    'duration': duration_match.group(),
                    'role': '',
                    'company': '',
                    'details': ''
                }
            
            # Look for role (job title)
            elif current_exp and not current_exp.get('role'):
                # Job titles often start with capital letters
                if line[0].isupper() and len(line.split()) <= 6:
                    current_exp['role'] = line
            
            # Look for company name
            elif current_exp and not current_exp.get('company'):
                if any(word in line for word in ['Inc', 'Ltd', 'LLC', 'Corp', 'Company', 'Technologies', 'Solutions']):
                    current_exp['company'] = line
            
            # Collect details
            elif current_exp:
                if current_exp.get('details'):
                    current_exp['details'] += ' ' + line
                else:
                    current_exp['details'] = line
        
        if current_exp:
            experience_list.append(Experience(**current_exp))
        
        return experience_list
    
    @staticmethod
    def _extract_skills(text: str) -> Skills:
        """Extract skills and categorize them"""
        
        # Programming languages
        prog_langs = []
        known_languages = [
            'Python', 'JavaScript', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust',
            'Swift', 'Kotlin', 'TypeScript', 'Scala', 'R', 'MATLAB', 'SQL', 'Dart'
        ]
        for lang in known_languages:
            if re.search(r'\b' + lang + r'\b', text, re.IGNORECASE):
                prog_langs.append(lang)
        
        # Web technologies
        web_techs = []
        known_web = [
            'HTML', 'CSS', 'React', 'Angular', 'Vue', 'Node.js', 'Express',
            'Django', 'Flask', 'Spring', 'ASP.NET', 'Bootstrap', 'Tailwind CSS',
            'jQuery', 'Next.js', 'Nuxt.js', 'Redux', 'GraphQL', 'REST API'
        ]
        for tech in known_web:
            if re.search(r'\b' + tech.replace('.', r'\.') + r'\b', text, re.IGNORECASE):
                web_techs.append(tech)
        
        # Tools and technologies
        tools = []
        known_tools = [
            'Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Jenkins', 'AWS',
            'Azure', 'GCP', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch',
            'Kafka', 'RabbitMQ', 'Terraform', 'Ansible', 'VS Code', 'IntelliJ',
            'Figma', 'Jira', 'Postman', 'Linux'
        ]
        for tool in known_tools:
            if re.search(r'\b' + tool + r'\b', text, re.IGNORECASE):
                tools.append(tool)
        
        # Soft skills
        soft_skills = []
        known_soft = [
            'Leadership', 'Communication', 'Teamwork', 'Problem Solving',
            'Critical Thinking', 'Time Management', 'Adaptability', 'Creativity',
            'Analytical Thinking', 'Collaboration', 'Project Management'
        ]
        for skill in known_soft:
            if re.search(r'\b' + skill + r'\b', text, re.IGNORECASE):
                soft_skills.append(skill)
        
        return Skills(
            programming_languages=prog_langs if prog_langs else ["Not Found"],
            web_technologies=web_techs if web_techs else ["Not Found"],
            tools_and_technologies=tools if tools else ["Not Found"],
            soft_skills=soft_skills if soft_skills else ["Not Found"]
        )
