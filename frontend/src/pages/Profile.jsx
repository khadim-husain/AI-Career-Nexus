import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Edit2,
  Save,
  X,
  Award,
  Target,
  TrendingUp,
  FileText,
  MessageSquare,
  BarChart3,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Star
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Bug Buster',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    role: 'Software Engineer',
    company: 'Tech Corp Inc.',
    joinDate: 'January 2024',
    bio: 'Passionate software engineer with 5+ years of experience in full-stack development. Love building scalable applications and learning new technologies.'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data
  };

  const activityStats = [
    { icon: <FileText className="w-5 h-5" />, label: 'Resumes Analyzed', value: '12', color: 'blue' },
    { icon: <Target className="w-5 h-5" />, label: 'Jobs Matched', value: '45', color: 'green' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'AI Sessions', value: '28', color: 'purple' },
    { icon: <Award className="w-5 h-5" />, label: 'Skills Learned', value: '8', color: 'orange' }
  ];

  const recentActivity = [
    { icon: <CheckCircle2 className="w-5 h-5 text-green-600" />, title: 'Resume Updated', time: '2 days ago', description: 'Updated professional summary and skills' },
    { icon: <Clock className="w-5 h-5 text-blue-600" />, title: 'Skill Gap Analysis', time: '5 days ago', description: 'Completed TypeScript learning path' },
    { icon: <Star className="w-5 h-5 text-yellow-600" />, title: 'Interview Practice', time: '1 week ago', description: 'Completed 3 mock interviews' },
    { icon: <TrendingUp className="w-5 h-5 text-purple-600" />, title: 'Career Score Updated', time: '2 weeks ago', description: 'Increased from 85 to 92' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 via-pink-500/3 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Header */}
      <div className="backdrop-blur-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] border-b border-white/10 sticky top-0 z-50 shadow-[0_0_50px_rgba(0,217,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Profile
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-3xl border border-white/10 overflow-hidden mb-8 shadow-[0_8px_32px_rgba(0,217,255,0.15)]"
          style={{
            boxShadow: '0 8px 32px rgba(0,217,255,0.15), inset 0 0 60px rgba(0,217,255,0.03)'
          }}
        >
          {/* Cover Background */}
          <div className="h-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
          </div>
          
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white ring-4 ring-white/10 shadow-[0_0_40px_rgba(0,217,255,0.6)]">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white">{profileData.name}</h2>
                    <p className="text-gray-400 mt-1">{profileData.role} at {profileData.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-400">{profileData.email}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400">{profileData.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Edit Button */}
                  {!isEditing ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profile
                    </motion.button>
                  ) : (
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSave}
                        className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCancel}
                        className="px-6 py-2.5 backdrop-blur-xl bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-medium transition-all flex items-center gap-2 border border-white/10"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <p className="mt-4 text-gray-400 leading-relaxed">{profileData.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Activity Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {activityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all shadow-[0_8px_32px_rgba(0,217,255,0.1)] hover:shadow-[0_8px_32px_rgba(0,217,255,0.2)]"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                stat.color === 'blue' ? 'from-cyan-500/20 to-blue-500/20' :
                stat.color === 'green' ? 'from-green-500/20 to-emerald-500/20' :
                stat.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
                'from-orange-500/20 to-yellow-500/20'
              } flex items-center justify-center ${
                stat.color === 'blue' ? 'text-cyan-400' :
                stat.color === 'green' ? 'text-green-400' :
                stat.color === 'purple' ? 'text-purple-400' :
                'text-orange-400'
              } mb-4 shadow-[0_0_20px_rgba(0,217,255,0.3)]`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal & Account Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                Personal Information
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.location}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Account Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Professional Information
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Current Role</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.role}
                      onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.role}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.company}
                      onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    />
                  ) : (
                    <p className="text-white py-2.5">{profileData.company}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Member Since</label>
                  <p className="text-white py-2.5 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {profileData.joinDate}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Activity Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)] sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-pink-400" />
                Recent Activity
              </h3>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 mt-1">
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm">{activity.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-medium transition-all border border-white/10">
                View All Activity
              </button>
            </motion.div>
          </div>
        </div>

        {/* Settings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
        >
          <h3 className="text-xl font-bold text-white mb-6">Account Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <p className="font-medium text-white">Email Notifications</p>
                <p className="text-sm text-gray-400">Receive updates about your career progress</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <p className="font-medium text-white">Weekly Reports</p>
                <p className="text-sm text-gray-400">Get weekly career insights and recommendations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-white">Two-Factor Authentication</p>
                <p className="text-sm text-gray-400">Add an extra layer of security</p>
              </div>
              <button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-xl font-medium transition-all text-sm border border-cyan-500/30">
                Enable
              </button>
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-red-400 mb-2">Danger Zone</h3>
          <p className="text-sm text-red-300/80 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            Delete Account
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
