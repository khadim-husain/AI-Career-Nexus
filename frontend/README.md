# AI Career Nexus Frontend

Ultra-Premium AI Career Guidance Platform - React Frontend

## 🚀 Features

- **Modern Dashboard** - Futuristic neon-glow UI with glassmorphism
- **AI Career Score** - Real-time career scoring and analytics
- **Skill Matcher** - Find jobs matching your skills
- **Resume Analyzer** - AI-powered resume analysis and improvements
- **AI Coach** - Interactive career coaching chatbot
- **Skill Gap Analysis** - Identify and bridge skill gaps

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **File Upload**: React Dropzone
- **Voice**: React Speech Recognition

## 📦 Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

1. **Install dependencies**
```bash
npm install
```

2. **Create environment file**
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=AI Career Nexus
```

3. **Run development server**
```bash
npm run dev
```

The app will be available at http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── SkillMatcher.jsx
│   │   ├── ResumeAnalyzer.jsx
│   │   ├── AICoach.jsx
│   │   └── SkillGap.jsx
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles and Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#00D9FF)
- **Secondary**: Purple (#B026FF)
- **Accent**: Pink (#FF006B)
- **Success**: Green (#00FF94)
- **Background**: Dark (#0a0a0f)

### Typography
- **Font Family**: Inter
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Effects
- Glassmorphism cards
- Neon glow effects
- Smooth animations
- Gradient backgrounds

## 🔌 API Integration

The frontend connects to the backend API at `http://localhost:8000`. Update the API URL in your `.env` file if needed.

## 📱 Responsive Design

Fully responsive design optimized for:
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (320px+)

## 🧪 Testing

```bash
npm run test
```

## 🚀 Deployment

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### Docker
```bash
docker build -t ai-career-nexus-frontend .
docker run -p 3000:80 ai-career-nexus-frontend
```

## 📝 License

MIT License
