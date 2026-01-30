# AI Career Nexus Backend

Ultra-Premium AI Career Guidance Platform - Backend API

## 🚀 Features

- **AI Career Score Analysis** - Get personalized career scores based on skills, experience, and market demand
- **Resume Analyzer** - Upload and analyze resumes for ATS compatibility and improvements
- **Skill Matcher** - Match skills with job opportunities using AI
- **AI Career Coach** - Interactive AI chat for career guidance and interview prep
- **Skill Gap Analysis** - Identify skill gaps and get personalized learning paths

## 🛠️ Tech Stack

- **Framework**: FastAPI
- **AI/ML**: OpenAI, Transformers, spaCy
- **Data Processing**: pandas, NumPy
- **Resume Parsing**: PyPDF2, python-docx, pdfplumber
- **Database**: SQLAlchemy (PostgreSQL)

## 📦 Installation

### Prerequisites
- Python 3.9+
- pip

### Setup

1. **Create virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Environment variables**
Create a `.env` file in the backend directory:
```env
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
DATABASE_URL=postgresql://user:password@localhost/ai_career_nexus
SECRET_KEY=your_secret_key
```

4. **Run the server**
```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## 📚 API Documentation

Once the server is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔌 API Endpoints

### Dashboard
- `GET /api/dashboard/score` - Get AI career score
- `GET /api/dashboard/progress` - Get career progress tracking
- `GET /api/dashboard/skills/distribution` - Get skill distribution
- `GET /api/dashboard/recommendations` - Get AI recommendations

### Skill Matcher
- `POST /api/skill-matcher/match` - Match skills with jobs
- `GET /api/skill-matcher/trending-skills` - Get trending skills

### Resume Analyzer
- `POST /api/resume-analyzer/upload` - Upload and analyze resume
- `POST /api/resume-analyzer/improve` - Get improvement suggestions
- `GET /api/resume-analyzer/templates` - Get resume templates

### AI Coach
- `POST /api/ai-coach/chat` - Chat with AI career coach
- `GET /api/ai-coach/interview-questions` - Get interview questions
- `POST /api/ai-coach/mock-interview` - Start mock interview

### Skill Gap
- `POST /api/skill-gap/analyze` - Analyze skill gaps
- `GET /api/skill-gap/learning-paths` - Get learning paths
- `GET /api/skill-gap/progress-tracking` - Track learning progress
- `GET /api/skill-gap/skill-demand` - Get market demand data

## 🏗️ Project Structure

```
backend/
├── api/                    # AI service modules
│   ├── career_analyzer.py
│   ├── resume_parser.py
│   └── skill_matcher.py
├── models/                 # Pydantic models
│   ├── user.py
│   ├── skill.py
│   ├── resume.py
│   └── career.py
├── routes/                 # API routes
│   ├── dashboard.py
│   ├── skill_matcher.py
│   ├── resume_analyzer.py
│   ├── ai_coach.py
│   └── skill_gap.py
├── main.py                # FastAPI application
└── requirements.txt       # Python dependencies
```

## 🧪 Testing

```bash
pytest tests/
```

## 🚀 Deployment

### Using Docker
```bash
docker build -t ai-career-nexus-backend .
docker run -p 8000:8000 ai-career-nexus-backend
```

### Using Cloud Services
- AWS: Elastic Beanstalk, ECS, or Lambda
- GCP: Cloud Run, App Engine
- Azure: App Service

## 📝 License

MIT License
