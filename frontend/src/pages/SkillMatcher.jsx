import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  X,
  Sparkles,
  TrendingUp,
  DollarSign,
  MapPin,
  Briefcase,
  Clock,
  Users,
  Award,
  Target,
  CheckCircle2,
  Star
} from 'lucide-react';

const SkillMatcher = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const suggestedSkills = [
    'Python', 'TypeScript', 'AWS', 'Docker', 'MongoDB',
    'GraphQL', 'Vue.js', 'Angular', 'Kubernetes', 'Redis',
    'PostgreSQL', 'Git', 'CI/CD', 'Machine Learning', 'TensorFlow'
  ];

  const jobMatches = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Innovation',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140K - $180K',
      match: 95,
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS'],
      posted: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'Frontend Architect',
      company: 'Digital Solutions Inc',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $170K',
      match: 92,
      skills: ['React', 'JavaScript', 'TypeScript', 'GraphQL'],
      posted: '1 week ago',
      applicants: 67
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K - $150K',
      match: 88,
      skills: ['React', 'JavaScript', 'Redux', 'Node.js'],
      posted: '3 days ago',
      applicants: 89
    },
    {
      id: 4,
      title: 'JavaScript Engineer',
      company: 'CloudTech Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110K - $140K',
      match: 85,
      skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      posted: '5 days ago',
      applicants: 102
    }
  ];

  const handleAddSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const getMatchColor = (match) => {
    if (match >= 90) return 'neon-green';
    if (match >= 80) return 'neon-blue';
    if (match >= 70) return 'neon-purple';
    return 'neon-pink';
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
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
              className="w-12 h-12 glass-morph rounded-xl flex items-center justify-center hover:border-neon-blue/50 border border-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Skill-to-Job Matching</h1>
              <p className="text-gray-400 mt-1">AI-powered career opportunities tailored for you</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 glass-morph rounded-full">
            <Sparkles className="w-4 h-4 text-neon-yellow animate-pulse" />
            <span className="text-sm">AI Analysis Active</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Skill Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-morph-strong rounded-3xl p-8 border border-white/10 sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <Target className="w-6 h-6 text-neon-blue" />
                <h2 className="text-2xl font-bold">Your Skills</h2>
              </div>

              {/* Skill Input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddSkill(inputValue);
                    }
                  }}
                  placeholder="Type a skill..."
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAddSkill(inputValue)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>

                {/* Suggestions Dropdown */}
                <AnimatePresence>
                  {showSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 glass-morph-strong rounded-xl border border-white/10 max-h-60 overflow-y-auto z-50"
                    >
                      <div className="p-2 space-y-1">
                        {suggestedSkills
                          .filter(s => s.toLowerCase().includes(inputValue.toLowerCase()) && !skills.includes(s))
                          .map(skill => (
                            <button
                              key={skill}
                              onClick={() => handleAddSkill(skill)}
                              className="w-full px-4 py-2 text-left rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
                            >
                              <span>{skill}</span>
                              <Sparkles className="w-4 h-4 text-neon-blue" />
                            </button>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AI Suggestions */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="w-4 h-4 text-neon-purple" />
                  <span className="text-sm text-gray-400">AI Suggested</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills.slice(0, 6).map(skill => (
                    !skills.includes(skill) && (
                      <motion.button
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddSkill(skill)}
                        className="px-3 py-1.5 glass-morph rounded-lg text-sm border border-neon-purple/30 hover:border-neon-purple/60 transition-colors"
                      >
                        {skill}
                      </motion.button>
                    )
                  ))}
                </div>
              </div>

              {/* Selected Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">
                  Selected Skills ({skills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <SkillChip key={skill} skill={skill} onRemove={handleRemoveSkill} />
                  ))}
                </div>
              </div>

              {/* Analyze Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze}
                disabled={skills.length === 0 || analyzing}
                className="w-full py-4 bg-neon-gradient rounded-xl font-bold text-lg shadow-neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  'Find Matching Jobs'
                )}
              </motion.button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass-morph rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text-blue">{skills.length}</div>
                  <div className="text-xs text-gray-500">Skills Added</div>
                </div>
                <div className="glass-morph rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text-purple">
                    {showResults ? jobMatches.length : '---'}
                  </div>
                  <div className="text-xs text-gray-500">Job Matches</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Job Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-morph-strong rounded-3xl p-12 border border-white/10 flex flex-col items-center justify-center min-h-[600px]"
                >
                  <div className="w-32 h-32 bg-neon-gradient opacity-20 rounded-full blur-2xl mb-8"></div>
                  <Target className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Add Your Skills</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    Start by adding your skills to get AI-powered job recommendations
                    tailored specifically for you
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      <span className="gradient-text">{jobMatches.length} Perfect Matches</span> Found
                    </h2>
                    <div className="flex items-center space-x-2 px-4 py-2 glass-morph rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-neon-green" />
                      <span className="text-sm">AI Verified</span>
                    </div>
                  </div>

                  {/* Job Cards */}
                  {jobMatches.map((job, index) => (
                    <JobCard key={job.id} job={job} index={index} getMatchColor={getMatchColor} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Skill Chip Component
const SkillChip = ({ skill, onRemove }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-2 px-3 py-2 bg-neon-gradient rounded-lg shadow-neon-blue"
  >
    <span className="text-sm font-semibold">{skill}</span>
    <button
      onClick={() => onRemove(skill)}
      className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
    >
      <X className="w-3 h-3" />
    </button>
  </motion.div>
);

// Job Card Component
const JobCard = ({ job, index, getMatchColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="glass-morph-strong rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Briefcase className="w-4 h-4" />
              <span>{job.company}</span>
            </div>
          </div>
          {/* Match Percentage */}
          <div className={`px-4 py-2 glass-morph rounded-xl border-2 border-${getMatchColor(job.match)}/50`}>
            <div className={`text-3xl font-bold neon-text-${getMatchColor(job.match)}`}>
              {job.match}%
            </div>
            <div className="text-xs text-gray-500 text-center">Match</div>
          </div>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap gap-4 mt-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Users className="w-4 h-4" />
            <span>{job.applicants} applicants</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Award className="w-4 h-4" />
            <span>{job.posted}</span>
          </div>
        </div>

        {/* Salary Prediction Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Salary Range</span>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-neon-green" />
              <span className="font-bold neon-text-green">{job.salary}</span>
            </div>
          </div>
          <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${job.match}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full"
            />
          </div>
        </div>

        {/* Required Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1 glass-morph rounded-lg text-xs font-medium border border-neon-blue/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 bg-neon-gradient rounded-xl font-semibold shadow-neon-blue"
          >
            Apply Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 glass-morph rounded-xl font-semibold border border-white/20"
          >
            Save
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SkillMatcher;
