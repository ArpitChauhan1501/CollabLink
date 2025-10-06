import React from 'react';
import { User, GraduationCap, Brain, Code, Trophy, Users, MapPin, MessageCircle, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

const ProfileCard = () => {
  const profile = {
    name: 'Ankit Sharma',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Ankit&backgroundColor=FF9A62',
    college: 'IIT Delhi',
    location: 'New Delhi, India',
    skills: ['React', 'Node.js', 'Python', 'UI/UX Design', 'Machine Learning'],
    badges: [
      { icon: Trophy, label: 'Hackathon Winner' },
      { icon: Users, label: 'Team Lead' },
      { icon: Brain, label: 'AI Enthusiast' },
    ],
    pastProjects: [
      { name: 'AgriSense', type: 'Mobile App', hackathon: 'MumbaiHacks 2025' },
      { name: 'SwachhCity', type: 'Web App', hackathon: 'Smart India Hackathon 2025' },
    ],
    socialLinks: [
      { icon: Linkedin, url: 'https://linkedin.com/in/ankit', color: 'bg-[#0077B5]' },
      { icon: Instagram, url: 'https://instagram.com/ankit', color: 'bg-gradient-to-r from-[#E4405F] to-[#F77737]' },
      { icon: Github, url: 'https://github.com/ankit', color: 'bg-[#24292E]' },
      { icon: Twitter, url: 'https://twitter.com/ankit', color: 'bg-[#1DA1F2]' },
    ],
  };

  return (
    <div className="relative max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-[#2D3648]/10 overflow-hidden doodle-card">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF] opacity-20" />
      
      {/* Avatar and Basic Info */}
      <div className="relative z-10 p-6 text-center">
        <div className="relative inline-block mb-6 mx-auto">
          <div className="logo-circle w-24 h-24 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-full flex items-center justify-center shadow-lg border-4 border-white/50 relative overflow-hidden animate-pulse-slow">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover drop-shadow-sm absolute inset-2"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#FFD93D] to-[#FFAA33] rounded-full flex items-center justify-center border-2 border-white/50 shadow-md transform rotate-12">
            <GraduationCap className="w-5 h-5 text-[#2D3648]" />
          </div>
        </div>
        <div className="mx-auto max-w-[200px]">
          <h2 className="text-2xl font-bold text-[#2D3648] mb-1 squiggle-underline text-center">{profile.name}</h2>
        </div>
        <p className="text-lg text-[#2D3648]/80 mb-2 font-semibold">{profile.college}</p>
        <div className="flex items-center justify-center space-x-2 text-sm text-[#2D3648]/60 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="relative z-10 px-6 py-4 border-t border-[#2D3648]/10">
        <h3 className="text-sm font-bold text-[#2D3648] uppercase tracking-wide mb-3 flex items-center space-x-2">
          <Code className="w-4 h-4 text-[#FF9A62]" />
          <span>Skills</span>
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {profile.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#6DD5ED]/20 text-[#2D3648] rounded-full text-sm font-semibold border border-[#6DD5ED]/30 hover:bg-[#6DD5ED]/30 transition-all duration-300 transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="relative z-10 px-6 py-4 border-t border-[#2D3648]/10">
        <h3 className="text-sm font-bold text-[#2D3648] uppercase tracking-wide mb-3 flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-[#FFD93D]" />
          <span>Badges</span>
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {profile.badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-[#FFD93D] to-[#FFAA33] text-[#2D3648] rounded-full shadow-md text-xs font-semibold border border-white/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <Icon className="w-4 h-4" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Past Projects/Hackathons */}
      <div className="relative z-10 px-6 py-4 border-t border-[#2D3648]/10">
        <h3 className="text-sm font-bold text-[#2D3648] uppercase tracking-wide mb-3 flex items-center space-x-2">
          <Brain className="w-4 h-4 text-[#FF6B9D]" />
          <span>Past Projects</span>
        </h3>
        <div className="space-y-3">
          {profile.pastProjects.map((project, idx) => (
            <div key={idx} className="doodle-card p-3 bg-white/70 rounded-xl border border-[#2D3648]/10 hover:shadow-md transition-all duration-300 transform hover:scale-102">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[#2D3648] flex-1">{project.name}</span>
                <span className="text-[#2D3648]/60 flex items-center space-x-2 ml-4">
                  <span className="text-xs">{project.type}</span>
                  <span>•</span>
                  <span className="text-xs font-medium">{project.hackathon}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="relative z-10 px-6 py-4 border-t border-[#2D3648]/10">
        <h3 className="text-sm font-bold text-[#2D3648] uppercase tracking-wide mb-3 flex items-center space-x-2">
          <MessageCircle className="w-4 h-4 text-[#6DD5ED]" />
          <span>Connect</span>
        </h3>
        <div className="flex justify-center space-x-4">
          {profile.socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white/20 group hover:shadow-xl transform hover:-rotate-6`}
                aria-label={link.url}
              >
                <Icon className="w-6 h-6 text-white drop-shadow-sm" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;