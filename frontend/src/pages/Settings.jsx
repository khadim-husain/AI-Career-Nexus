import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Lock,
  Bell,
  Palette,
  Shield,
  Globe,
  Mail,
  Smartphone,
  Eye,
  EyeOff,
  Save,
  ArrowLeft,
  Check,
  Moon,
  Sun,
  Monitor,
  Zap,
  Database,
  LogOut
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [settings, setSettings] = useState({
    // Account
    username: 'johndoe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Privacy
    profileVisibility: 'public',
    showEmail: true,
    showPhone: false,
    allowMessaging: true,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    jobAlerts: true,
    skillRecommendations: true,
    messageNotifications: true,
    
    // Appearance
    theme: 'dark',
    language: 'en',
    fontSize: 'medium',
    animations: true
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: <User className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="w-5 h-5" /> }
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
              Settings
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-4 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)] sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_30px_rgba(0,217,255,0.4)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === 'account' && <AccountSettings key="account" settings={settings} setSettings={setSettings} showPassword={showPassword} setShowPassword={setShowPassword} />}
              {activeTab === 'privacy' && <PrivacySettings key="privacy" settings={settings} setSettings={setSettings} />}
              {activeTab === 'notifications' && <NotificationSettings key="notifications" settings={settings} setSettings={setSettings} />}
              {activeTab === 'appearance' && <AppearanceSettings key="appearance" settings={settings} setSettings={setSettings} />}
            </AnimatePresence>

            {/* Save Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center justify-between backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
            >
              <p className="text-gray-400 text-sm">
                Make sure to save your changes before leaving this page.
              </p>
              <div className="flex items-center gap-3">
                {saveSuccess && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <Check className="w-5 h-5" />
                    <span className="text-sm font-medium">Saved successfully!</span>
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Account Settings Component
const AccountSettings = ({ settings, setSettings, showPassword, setShowPassword }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    {/* Basic Information */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-cyan-400" />
        Basic Information
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
          <input
            type="text"
            value={settings.username}
            onChange={(e) => setSettings({...settings, username: e.target.value})}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({...settings, email: e.target.value})}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Change Password */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Lock className="w-5 h-5 text-purple-400" />
        Change Password
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={settings.currentPassword}
              onChange={(e) => setSettings({...settings, currentPassword: e.target.value})}
              placeholder="Enter current password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all pr-12"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={settings.newPassword}
            onChange={(e) => setSettings({...settings, newPassword: e.target.value})}
            placeholder="Enter new password"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={settings.confirmPassword}
            onChange={(e) => setSettings({...settings, confirmPassword: e.target.value})}
            placeholder="Confirm new password"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>
      </div>
    </div>

    {/* Danger Zone */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-red-400 mb-2 flex items-center gap-2">
        <LogOut className="w-5 h-5" />
        Danger Zone
      </h3>
      <p className="text-sm text-red-300/80 mb-4">Once you delete your account, there is no going back.</p>
      <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]">
        Delete Account
      </button>
    </div>
  </motion.div>
);

// Privacy Settings Component
const PrivacySettings = ({ settings, setSettings }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
  >
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <Shield className="w-5 h-5 text-cyan-400" />
      Privacy Settings
    </h3>

    <div className="space-y-6">
      {/* Profile Visibility */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-3">Profile Visibility</label>
        <select
          value={settings.profileVisibility}
          onChange={(e) => setSettings({...settings, profileVisibility: e.target.value})}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
        >
          <option value="public" className="bg-[#0f0f1e]">Public</option>
          <option value="private" className="bg-[#0f0f1e]">Private</option>
          <option value="connections" className="bg-[#0f0f1e]">Connections Only</option>
        </select>
      </div>

      {/* Toggle Options */}
      <ToggleOption
        label="Show Email on Profile"
        description="Allow others to see your email address"
        checked={settings.showEmail}
        onChange={(checked) => setSettings({...settings, showEmail: checked})}
      />

      <ToggleOption
        label="Show Phone Number"
        description="Display your phone number publicly"
        checked={settings.showPhone}
        onChange={(checked) => setSettings({...settings, showPhone: checked})}
      />

      <ToggleOption
        label="Allow Messaging"
        description="Let other users send you direct messages"
        checked={settings.allowMessaging}
        onChange={(checked) => setSettings({...settings, allowMessaging: checked})}
      />

      <div className="pt-4 border-t border-white/10">
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
          Download My Data
        </button>
      </div>
    </div>
  </motion.div>
);

// Notification Settings Component
const NotificationSettings = ({ settings, setSettings }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    {/* Email Notifications */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Mail className="w-5 h-5 text-cyan-400" />
        Email Notifications
      </h3>

      <div className="space-y-4">
        <ToggleOption
          label="Email Notifications"
          description="Receive email updates about your account"
          checked={settings.emailNotifications}
          onChange={(checked) => setSettings({...settings, emailNotifications: checked})}
        />

        <ToggleOption
          label="Weekly Reports"
          description="Get weekly summaries of your career progress"
          checked={settings.weeklyReports}
          onChange={(checked) => setSettings({...settings, weeklyReports: checked})}
        />

        <ToggleOption
          label="Job Alerts"
          description="Notifications about job matches"
          checked={settings.jobAlerts}
          onChange={(checked) => setSettings({...settings, jobAlerts: checked})}
        />
      </div>
    </div>

    {/* Push Notifications */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-purple-400" />
        Push Notifications
      </h3>

      <div className="space-y-4">
        <ToggleOption
          label="Push Notifications"
          description="Receive push notifications on your devices"
          checked={settings.pushNotifications}
          onChange={(checked) => setSettings({...settings, pushNotifications: checked})}
        />

        <ToggleOption
          label="Skill Recommendations"
          description="Get notified about new skill recommendations"
          checked={settings.skillRecommendations}
          onChange={(checked) => setSettings({...settings, skillRecommendations: checked})}
        />

        <ToggleOption
          label="Messages"
          description="Alerts for new messages and mentions"
          checked={settings.messageNotifications}
          onChange={(checked) => setSettings({...settings, messageNotifications: checked})}
        />
      </div>
    </div>
  </motion.div>
);

// Appearance Settings Component
const AppearanceSettings = ({ settings, setSettings }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,217,255,0.1)]"
  >
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <Palette className="w-5 h-5 text-cyan-400" />
      Appearance Settings
    </h3>

    <div className="space-y-6">
      {/* Theme Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-3">Theme</label>
        <div className="grid grid-cols-3 gap-3">
          <ThemeOption
            icon={<Sun className="w-5 h-5" />}
            label="Light"
            active={settings.theme === 'light'}
            onClick={() => setSettings({...settings, theme: 'light'})}
          />
          <ThemeOption
            icon={<Moon className="w-5 h-5" />}
            label="Dark"
            active={settings.theme === 'dark'}
            onClick={() => setSettings({...settings, theme: 'dark'})}
          />
          <ThemeOption
            icon={<Monitor className="w-5 h-5" />}
            label="System"
            active={settings.theme === 'system'}
            onClick={() => setSettings({...settings, theme: 'system'})}
          />
        </div>
      </div>

      {/* Language */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-3">Language</label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <select
            value={settings.language}
            onChange={(e) => setSettings({...settings, language: e.target.value})}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          >
            <option value="en" className="bg-[#0f0f1e]">English</option>
            <option value="es" className="bg-[#0f0f1e]">Español</option>
            <option value="fr" className="bg-[#0f0f1e]">Français</option>
            <option value="de" className="bg-[#0f0f1e]">Deutsch</option>
          </select>
        </div>
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-3">Font Size</label>
        <select
          value={settings.fontSize}
          onChange={(e) => setSettings({...settings, fontSize: e.target.value})}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
        >
          <option value="small" className="bg-[#0f0f1e]">Small</option>
          <option value="medium" className="bg-[#0f0f1e]">Medium</option>
          <option value="large" className="bg-[#0f0f1e]">Large</option>
        </select>
      </div>

      {/* Animations */}
      <ToggleOption
        label="Enable Animations"
        description="Show smooth transitions and effects"
        checked={settings.animations}
        onChange={(checked) => setSettings({...settings, animations: checked})}
        icon={<Zap className="w-5 h-5 text-yellow-400" />}
      />
    </div>
  </motion.div>
);

// Reusable Toggle Component
const ToggleOption = ({ label, description, checked, onChange, icon }) => (
  <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
    <div className="flex items-start gap-3">
      {icon && <div className="mt-0.5">{icon}</div>}
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-sm text-gray-400 mt-0.5">{description}</p>
      </div>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
    </label>
  </div>
);

// Theme Option Component
const ThemeOption = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-xl border transition-all ${
      active
        ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(0,217,255,0.3)]'
        : 'bg-white/5 border-white/10 hover:border-white/20'
    }`}
  >
    <div className={`flex flex-col items-center gap-2 ${active ? 'text-cyan-400' : 'text-gray-400'}`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  </button>
);

export default Settings;
