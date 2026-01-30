import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Brain,
  Target,
  FileText,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Award,
  Zap,
  ArrowRight,
  Home,
  User,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const aiScoreData = [
    { name: 'Score', value: 92, fill: 'url(#scoreGradient)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient overlays */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 via-pink-500/3 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="flex h-screen relative">
        {/* Enhanced Sidebar with Glow */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-80 backdrop-blur-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] border-r border-white/10 relative z-20 shadow-[0_0_50px_rgba(0,217,255,0.1)]"
          style={{
            boxShadow: 'inset 0 0 60px rgba(0,217,255,0.03), 0 0 50px rgba(0,217,255,0.1)'
          }}
        >
          {/* Sidebar inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
          
          <div className="p-6 relative z-10">
            {/* Premium Logo */}
            <div className="flex items-center space-x-3 mb-12">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.5)]"
              >
                <Brain className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </motion.div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                  AI Career Nexus
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span className="text-[10px] text-cyan-400 font-semibold tracking-wider">PREMIUM</span>
                </div>
              </div>
            </div>

            {/* Enhanced User Profile Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 mb-8 border border-cyan-500/30 relative overflow-hidden shadow-[0_8px_32px_rgba(0,217,255,0.15)]"
              style={{
                boxShadow: '0 8px 32px rgba(0,217,255,0.15), inset 0 0 30px rgba(0,217,255,0.05)'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
              
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_rgba(0,217,255,0.6)] ring-2 ring-cyan-400/30 ring-offset-2 ring-offset-transparent">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Bug Buster</h3>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm relative z-10">
                <span className="text-gray-400">Career Level</span>
                <span className="text-cyan-400 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]">Mid-Senior</span>
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              <NavItem 
                icon={<Home className="w-5 h-5" />} 
                label="Overview" 
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <NavItem 
                icon={<Target className="w-5 h-5" />} 
                label="Skill Matcher" 
                onClick={() => navigate('/skill-matcher')}
              />
              <NavItem 
                icon={<FileText className="w-5 h-5" />} 
                label="Resume Analyzer" 
                onClick={() => navigate('/resume-analyzer')}
              />
              <NavItem 
                icon={<MessageSquare className="w-5 h-5" />} 
                label="AI Coach" 
                onClick={() => navigate('/ai-coach')}
              />
              <NavItem 
                icon={<BarChart3 className="w-5 h-5" />} 
                label="Skill Gap" 
                onClick={() => navigate('/skill-gap')}
              />
            </nav>

            <div className="mt-auto pt-8 space-y-2">
              <NavItem 
                icon={<User className="w-5 h-5" />} 
                label="Profile" 
                onClick={() => navigate('/profile')}
              />
              <NavItem 
                icon={<Settings className="w-5 h-5" />} 
                label="Settings" 
                onClick={() => navigate('/settings')}
              />
              <NavItem 
                icon={<LogOut className="w-5 h-5" />} 
                label="Logout" 
                onClick={() => setShowLogoutModal(true)}
              />
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative z-10">
          <div className="p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Bug Buster</span>! 🚀
              </h1>
              <p className="text-gray-400">Here's your AI-powered career dashboard</p>
            </motion.div>

            {/* AI Career Score Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-morph-strong rounded-3xl p-8 mb-8 border-2 border-neon-blue/30 shadow-neon-blue"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* AI Score Gauge */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-300">AI Career Score</h3>
                  <div className="relative w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="100%"
                        barSize={15}
                        data={aiScoreData}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                        <RadialBar
                          dataKey="value"
                          cornerRadius={10}
                          fill="#00D9FF"
                          background={{ fill: '#1C1C26' }}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold gradient-text">92</div>
                        <div className="text-sm text-gray-400">out of 100</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2 px-4 py-2 glass-morph rounded-full">
                    <TrendingUp className="w-4 h-4 text-neon-green" />
                    <span className="text-sm text-neon-green">+8 this week</span>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold mb-6">Score Breakdown</h3>
                  <ScoreBar label="Technical Skills" value={95} color="blue" />
                  <ScoreBar label="Soft Skills" value={88} color="purple" />
                  <ScoreBar label="Experience" value={92} color="pink" />
                  <ScoreBar label="Market Demand" value={94} color="green" />
                  <ScoreBar label="Resume Quality" value={87} color="blue" />
                </div>
              </div>
            </motion.div>

            {/* Career Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-morph-strong rounded-3xl p-8 border border-white/10 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Career Progress</h3>
                <Award className="w-6 h-6 text-neon-yellow" />
              </div>
              <div className="space-y-4">
                <ProgressItem 
                  icon={<CheckCircle2 className="w-5 h-5 text-neon-green" />}
                  title="Resume Updated"
                  subtitle="2 days ago"
                  progress={100}
                />
                <ProgressItem 
                  icon={<Clock className="w-5 h-5 text-neon-blue" />}
                  title="Skill Gap Analysis"
                  subtitle="In Progress"
                  progress={65}
                />
                <ProgressItem 
                  icon={<Star className="w-5 h-5 text-neon-purple" />}
                  title="Interview Prep"
                  subtitle="4/10 sessions"
                  progress={40}
                />
                <ProgressItem 
                  icon={<Target className="w-5 h-5 text-neon-pink" />}
                  title="Job Applications"
                  subtitle="12 sent"
                  progress={80}
                />
              </div>
            </motion.div>

            {/* Recommendations Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-6">AI Recommendations for You</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <RecommendationCard
                  icon={<Brain className="w-8 h-8" />}
                  title="Learn TypeScript"
                  description="Based on your career goals, TypeScript will boost your marketability by 35%"
                  gradient="from-neon-blue to-neon-purple"
                  action="Start Learning"
                />
                <RecommendationCard
                  icon={<Target className="w-8 h-8" />}
                  title="Apply to Google"
                  description="You have a 78% match for Senior Frontend Developer at Google"
                  gradient="from-neon-purple to-neon-pink"
                  action="View Job"
                />
                <RecommendationCard
                  icon={<MessageSquare className="w-8 h-8" />}
                  title="Practice Interviews"
                  description="Improve your system design answers with AI mock interviews"
                  gradient="from-neon-pink to-neon-green"
                  action="Start Session"
                />
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <QuickActionCard
                  icon={<Target />}
                  title="Find Jobs"
                  onClick={() => navigate('/skill-matcher')}
                />
                <QuickActionCard
                  icon={<FileText />}
                  title="Scan Resume"
                  onClick={() => navigate('/resume-analyzer')}
                />
                <QuickActionCard
                  icon={<MessageSquare />}
                  title="AI Chat"
                  onClick={() => navigate('/ai-coach')}
                />
                <QuickActionCard
                  icon={<BarChart3 />}
                  title="View Analytics"
                  onClick={() => navigate('/skill-gap')}
                />
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.15] to-white/[0.08] rounded-2xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,217,255,0.2)] max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,217,255,0.4)]">
                <LogOut className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Logout Confirmation</h3>
              <p className="text-gray-400 mb-8">Are you sure you want to logout?</p>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/login')}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all"
                >
                  Logout
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// Components
const NavItem = ({ icon, label, active, onClick }) => (
  <motion.button
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-neon-gradient text-white shadow-neon-blue' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
    {active && <ChevronRight className="w-4 h-4 ml-auto" />}
  </motion.button>
);

const ScoreBar = ({ label, value, color }) => {
  const colorMap = {
    blue: 'bg-neon-blue',
    purple: 'bg-neon-purple',
    pink: 'bg-neon-pink',
    green: 'bg-neon-green',
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-bold">{value}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${colorMap[color]} rounded-full`}
        />
      </div>
    </div>
  );
};

const SkillWheel = () => (
  <svg className="w-full h-full" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="skillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D9FF" />
        <stop offset="100%" stopColor="#B026FF" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      fill="none"
      stroke="url(#skillGrad1)"
      strokeWidth="8"
      strokeDasharray="502"
      initial={{ strokeDashoffset: 502 }}
      animate={{ strokeDashoffset: 0, rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    <circle cx="100" cy="100" r="60" fill="rgba(0, 217, 255, 0.1)" />
  </svg>
);

const SkillTag = ({ label, level, color }) => (
  <div className="flex items-center justify-between px-4 py-2 glass-morph rounded-lg">
    <span className="text-sm font-medium">{label}</span>
    <span className={`text-sm font-bold neon-text-${color}`}>{level}%</span>
  </div>
);

const ProgressItem = ({ icon, title, subtitle, progress }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
      <span className="text-sm font-bold">{progress}%</span>
    </div>
    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="h-full bg-neon-gradient rounded-full"
      />
    </div>
  </div>
);

const RecommendationCard = ({ icon, title, description, gradient, action }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-morph-strong rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
  >
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-sm text-gray-400 mb-4">{description}</p>
    <button className="flex items-center space-x-2 text-neon-blue font-semibold group">
      <span>{action}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const QuickActionCard = ({ icon, title, onClick }) => (
  <motion.button
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="glass-morph-strong rounded-2xl p-6 border border-white/10 hover:border-neon-blue/50 transition-all flex flex-col items-center space-y-3"
  >
    <div className="w-12 h-12 rounded-xl bg-neon-gradient flex items-center justify-center">
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
    </div>
    <span className="font-semibold">{title}</span>
  </motion.button>
);

export default Dashboard;
