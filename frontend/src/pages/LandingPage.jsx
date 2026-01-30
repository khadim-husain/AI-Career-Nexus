import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Target, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Bot,
  FileText,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);

  return (
    <div className="min-h-screen bg-dark-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple opacity-20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink opacity-20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 glass-morph border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-neon-gradient rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">AI Career Nexus</span>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 bg-neon-gradient rounded-full text-white font-semibold shadow-neon-blue"
            >
              Login / Sign Up
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 glass-morph rounded-full"
              >
                <Sparkles className="w-4 h-4 text-neon-yellow" />
                <span className="text-sm text-gray-300">Powered by Advanced AI</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Your Future Career,
                <br />
                <span className="gradient-text">AI-Engineered</span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                Unlock your potential with intelligent career mapping, AI-powered resume analysis, 
                and personalized skill development. The future of career guidance is here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/dashboard')}
                  className="group px-8 py-4 bg-neon-gradient rounded-2xl text-white font-bold text-lg shadow-neon-blue flex items-center justify-center space-x-2"
                >
                  <span>Start Career Test</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-morph-strong rounded-2xl text-white font-bold text-lg border border-neon-blue/30"
                >
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold neon-text-blue">50K+</div>
                  <div className="text-sm text-gray-500">Career Paths</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold neon-text-purple">98%</div>
                  <div className="text-sm text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold neon-text-pink">1M+</div>
                  <div className="text-sm text-gray-500">Users</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Floating Cards */}
              <div className="relative w-full h-[600px]">
                <FloatingCard 
                  icon={<Target className="w-6 h-6" />}
                  title="95% Match"
                  subtitle="Data Scientist"
                  color="blue"
                  position="top-0 left-0"
                  delay={0}
                />
                <FloatingCard 
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="$120K"
                  subtitle="Avg Salary"
                  color="purple"
                  position="top-20 right-0"
                  delay={0.2}
                />
                <FloatingCard 
                  icon={<Zap className="w-6 h-6" />}
                  title="85%"
                  subtitle="Skill Match"
                  color="pink"
                  position="bottom-40 left-10"
                  delay={0.4}
                />
                <FloatingCard 
                  icon={<Brain className="w-6 h-6" />}
                  title="AI Score"
                  subtitle="9.2/10"
                  color="green"
                  position="bottom-10 right-10"
                  delay={0.6}
                />

                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-gradient opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">AI-Powered Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              Transform your career journey with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Skill-to-Job Matching"
              description="AI analyzes your skills and matches you with perfect career opportunities"
              gradient="from-neon-blue to-neon-purple"
              delay={0}
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Resume Analyzer"
              description="Get instant AI feedback and transform your resume into a job-winning document"
              gradient="from-neon-purple to-neon-pink"
              delay={0.1}
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="AI Interview Coach"
              description="Practice with AI, get real-time feedback, and ace your next interview"
              gradient="from-neon-pink to-neon-green"
              delay={0.2}
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Skill Gap Analytics"
              description="Visualize your strengths and get personalized learning roadmaps"
              gradient="from-neon-green to-neon-blue"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morph-strong rounded-3xl p-12 text-center border-2 border-neon-blue/30 shadow-neon-blue"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join millions of young professionals shaping their future with AI
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 217, 255, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
              className="px-12 py-5 bg-neon-gradient rounded-2xl text-white font-bold text-xl shadow-neon-blue"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 AI Career Nexus. Empowering the next generation.</p>
        </div>
      </footer>
    </div>
  );
};

// Floating Card Component
const FloatingCard = ({ icon, title, subtitle, color, position, delay }) => {
  const colorMap = {
    blue: 'border-neon-blue/50 shadow-neon-blue',
    purple: 'border-neon-purple/50 shadow-neon-purple',
    pink: 'border-neon-pink/50 shadow-neon-pink',
    green: 'border-neon-green/50 shadow-glow',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute ${position} glass-morph-strong rounded-2xl p-6 border-2 ${colorMap[color]} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 flex items-center justify-center text-neon-${color}`}>
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-sm text-gray-400">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, gradient, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group glass-morph-strong rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center text-neon-blue group-hover:translate-x-2 transition-transform">
        <span className="font-semibold">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </motion.div>
  );
};

export default LandingPage;
