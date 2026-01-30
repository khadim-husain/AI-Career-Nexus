import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import SkillMatcher from './pages/SkillMatcher';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import AICoach from './pages/AICoach';
import SkillGap from './pages/SkillGap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/skill-matcher" element={<SkillMatcher />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/ai-coach" element={<AICoach />} />
        <Route path="/skill-gap" element={<SkillGap />} />
      </Routes>
    </Router>
  );
}

export default App;
