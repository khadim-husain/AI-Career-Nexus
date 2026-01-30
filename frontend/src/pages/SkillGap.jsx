import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  Target,
  AlertCircle,
  BookOpen,
  Calendar,
  Clock,
  Award,
  Zap,
  BarChart3,
  Activity,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart
} from 'recharts';

const SkillGap = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  // Radar chart data - skill strengths
  const skillStrengthData = [
    { skill: 'JavaScript', current: 95, desired: 100 },
    { skill: 'React', current: 92, desired: 95 },
    { skill: 'TypeScript', current: 75, desired: 90 },
    { skill: 'Node.js', current: 88, desired: 95 },
    { skill: 'Python', current: 65, desired: 85 },
    { skill: 'AWS', current: 60, desired: 90 }
  ];

  // Missing skills heatmap
  const missingSkills = [
    { name: 'Docker', importance: 95, difficulty: 'Medium', time: '2 weeks', category: 'DevOps' },
    { name: 'Kubernetes', importance: 90, difficulty: 'Hard', time: '4 weeks', category: 'DevOps' },
    { name: 'GraphQL', importance: 85, difficulty: 'Easy', time: '1 week', category: 'Backend' },
    { name: 'PostgreSQL', importance: 88, difficulty: 'Medium', time: '2 weeks', category: 'Database' },
    { name: 'Redis', importance: 80, difficulty: 'Easy', time: '1 week', category: 'Database' },
    { name: 'System Design', importance: 95, difficulty: 'Hard', time: '8 weeks', category: 'Architecture' },
    { name: 'CI/CD', importance: 85, difficulty: 'Medium', time: '2 weeks', category: 'DevOps' },
    { name: 'Testing', importance: 82, difficulty: 'Easy', time: '1 week', category: 'Quality' }
  ];

  // Weekly growth data
  const growthData = [
    { week: 'W1', score: 72, hours: 8 },
    { week: 'W2', score: 75, hours: 10 },
    { week: 'W3', score: 78, hours: 12 },
    { week: 'W4', score: 82, hours: 15 },
    { week: 'W5', score: 85, hours: 14 },
    { week: 'W6', score: 87, hours: 16 },
    { week: 'W7', score: 90, hours: 18 }
  ];

  // Recommended courses
  const recommendedCourses = [
    {
      id: 1,
      title: 'Docker & Kubernetes Masterclass',
      provider: 'Udemy',
      duration: '20 hours',
      rating: 4.8,
      impact: 'High',
      skillsCovered: ['Docker', 'Kubernetes', 'CI/CD'],
      progress: 0
    },
    {
      id: 2,
      title: 'System Design Interview Prep',
      provider: 'Coursera',
      duration: '40 hours',
      rating: 4.9,
      impact: 'Critical',
      skillsCovered: ['System Design', 'Architecture', 'Scalability'],
      progress: 35
    },
    {
      id: 3,
      title: 'GraphQL Complete Guide',
      provider: 'Frontend Masters',
      duration: '8 hours',
      rating: 4.7,
      impact: 'Medium',
      skillsCovered: ['GraphQL', 'API Design'],
      progress: 0
    }
  ];

  // Learning roadmap timeline
  const roadmapItems = [
    { 
      id: 1, 
      title: 'Master Docker Containerization', 
      duration: '2 weeks', 
      status: 'in-progress',
      dueDate: '2025-12-26'
    },
    { 
      id: 2, 
      title: 'Learn Kubernetes Orchestration', 
      duration: '4 weeks', 
      status: 'upcoming',
      dueDate: '2026-01-23'
    },
    { 
      id: 3, 
      title: 'PostgreSQL Database Mastery', 
      duration: '2 weeks', 
      status: 'upcoming',
      dueDate: '2026-02-06'
    },
    { 
      id: 4, 
      title: 'System Design Patterns', 
      duration: '8 weeks', 
      status: 'upcoming',
      dueDate: '2026-04-03'
    },
    { 
      id: 5, 
      title: 'CI/CD Pipeline Implementation', 
      duration: '2 weeks', 
      status: 'upcoming',
      dueDate: '2026-04-17'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'neon-green';
      case 'Medium': return 'neon-blue';
      case 'Hard': return 'neon-pink';
      default: return 'gray-500';
    }
  };

  const getImportanceColor = (importance) => {
    if (importance >= 90) return 'neon-pink';
    if (importance >= 80) return 'neon-purple';
    return 'neon-blue';
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/dashboard')}
              className="w-12 h-12 glass-morph rounded-xl flex items-center justify-center hover:border-neon-purple/50 border border-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Skill Gap & Analytics</h1>
              <p className="text-gray-400 mt-1">Your personalized learning roadmap powered by AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {['week', 'month', 'year'].map(timeframe => (
              <motion.button
                key={timeframe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`
                  px-4 py-2 rounded-xl capitalize transition-all
                  ${selectedTimeframe === timeframe 
                    ? 'bg-neon-gradient shadow-neon-blue' 
                    : 'glass-morph border border-white/10 hover:border-neon-blue/50'
                  }
                `}
              >
                {timeframe}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Top Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Overall Progress"
            value="87%"
            change="+12%"
            color="neon-green"
          />
          <StatCard
            icon={<Target className="w-6 h-6" />}
            title="Skills Mastered"
            value="24"
            change="+3 this week"
            color="neon-blue"
          />
          <StatCard
            icon={<AlertCircle className="w-6 h-6" />}
            title="Skills to Learn"
            value="8"
            change="High priority"
            color="neon-pink"
          />
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            title="Learning Hours"
            value="156h"
            change="+18h this week"
            color="neon-purple"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Skill Strength Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-morph-strong rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Skill Strength Analysis</h2>
              <Activity className="w-6 h-6 text-neon-blue" />
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillStrengthData}>
                  <PolarGrid stroke="#2E2E40" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9CA3AF' }} />
                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="#00D9FF"
                    fill="#00D9FF"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Desired"
                    dataKey="desired"
                    stroke="#B026FF"
                    fill="#B026FF"
                    fillOpacity={0.2}
                    strokeDasharray="5 5"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                <span className="text-sm text-gray-400">Current Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                <span className="text-sm text-gray-400">Target Level</span>
              </div>
            </div>
          </motion.div>

          {/* Weekly Growth Graph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-morph-strong rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Weekly Growth Trend</h2>
              <BarChart3 className="w-6 h-6 text-neon-green" />
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FFB9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FFB9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2E2E40" />
                  <XAxis dataKey="week" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1C1C26',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#00FFB9"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorScore)"
                  />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#00D9FF"
                    strokeWidth={2}
                    dot={{ fill: '#00D9FF', r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                <span className="text-sm text-gray-400">Skill Score</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                <span className="text-sm text-gray-400">Learning Hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Missing Skills Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-morph-strong rounded-3xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Missing Skills Heatmap</h2>
              <p className="text-gray-400">Skills ranked by importance and time to learn</p>
            </div>
            <AlertCircle className="w-8 h-8 text-neon-pink" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {missingSkills.map((skill, index) => (
              <SkillHeatmapCard key={skill.name} skill={skill} index={index} getDifficultyColor={getDifficultyColor} getImportanceColor={getImportanceColor} />
            ))}
          </div>
        </motion.div>

        {/* AI Recommended Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-morph-strong rounded-3xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">AI Recommended Courses</h2>
              <p className="text-gray-400">Personalized learning paths based on your goals</p>
            </div>
            <BookOpen className="w-8 h-8 text-neon-purple" />
          </div>

          <div className="space-y-4">
            {recommendedCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Personalized Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-morph-strong rounded-3xl p-8 border border-white/10"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Learning Roadmap</h2>
              <p className="text-gray-400">AI-generated personalized timeline to reach your career goals</p>
            </div>
            <Calendar className="w-8 h-8 text-neon-blue" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

            {/* Roadmap Items */}
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <RoadmapItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, change, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    className="glass-morph-strong rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
  >
    <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center mb-4 text-${color}`}>
      {icon}
    </div>
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="text-sm text-gray-400 mb-2">{title}</div>
    <div className={`text-xs neon-text-${color}`}>{change}</div>
  </motion.div>
);

// Skill Heatmap Card Component
const SkillHeatmapCard = ({ skill, index, getDifficultyColor, getImportanceColor }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className={`glass-morph rounded-2xl p-5 border-2 border-${getImportanceColor(skill.importance)}/30 hover:border-${getImportanceColor(skill.importance)}/60 transition-all cursor-pointer`}
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="font-bold text-lg">{skill.name}</h3>
      <div className={`px-2 py-1 glass-morph rounded text-xs font-semibold neon-text-${getImportanceColor(skill.importance)}`}>
        {skill.importance}%
      </div>
    </div>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Category</span>
        <span className="font-medium">{skill.category}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Difficulty</span>
        <span className={`font-semibold neon-text-${getDifficultyColor(skill.difficulty)}`}>
          {skill.difficulty}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Time needed</span>
        <span className="font-medium">{skill.time}</span>
      </div>
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-2 bg-neon-gradient rounded-lg text-sm font-semibold"
    >
      Start Learning
    </motion.button>
  </motion.div>
);

// Course Card Component
const CourseCard = ({ course, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ x: 5 }}
    className="glass-morph rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <h3 className="text-xl font-bold">{course.title}</h3>
          {course.impact === 'Critical' && (
            <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink/50 rounded text-xs font-semibold neon-text-pink">
              Critical
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.provider}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-neon-yellow" />
            <span>{course.rating} ⭐</span>
          </span>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {course.skillsCovered.map(skill => (
        <span key={skill} className="px-3 py-1 glass-morph rounded-lg text-xs border border-neon-blue/30">
          {skill}
        </span>
      ))}
    </div>

    {course.progress > 0 && (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="font-bold neon-text-green">{course.progress}%</span>
        </div>
        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            className="h-full bg-neon-green rounded-full"
          />
        </div>
      </div>
    )}

    <div className="flex space-x-3">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 py-3 bg-neon-gradient rounded-xl font-semibold flex items-center justify-center space-x-2"
      >
        <span>{course.progress > 0 ? 'Continue' : 'Start Course'}</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 glass-morph rounded-xl font-semibold border border-white/20"
      >
        Preview
      </motion.button>
    </div>
  </motion.div>
);

// Roadmap Item Component
const RoadmapItem = ({ item, index }) => {
  const statusConfig = {
    'in-progress': {
      icon: <Zap className="w-5 h-5 text-neon-blue" />,
      color: 'neon-blue',
      bgColor: 'bg-neon-blue/20',
      borderColor: 'border-neon-blue/50'
    },
    'upcoming': {
      icon: <Clock className="w-5 h-5 text-gray-500" />,
      color: 'gray-400',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30'
    },
    'completed': {
      icon: <CheckCircle2 className="w-5 h-5 text-neon-green" />,
      color: 'neon-green',
      bgColor: 'bg-neon-green/20',
      borderColor: 'border-neon-green/50'
    }
  };

  const config = statusConfig[item.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-start space-x-6"
    >
      {/* Timeline Node */}
      <div className={`relative z-10 w-16 h-16 rounded-2xl ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center flex-shrink-0`}>
        {config.icon}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ x: 5 }}
        className="flex-1 glass-morph-strong rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <span className={`px-3 py-1 glass-morph rounded-lg text-xs font-semibold capitalize text-${config.color}`}>
            {item.status.replace('-', ' ')}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{item.duration}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Due: {new Date(item.dueDate).toLocaleDateString()}</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillGap;
