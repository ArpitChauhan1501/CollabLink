'use client';

import React, { useState } from 'react';
import { User, Save, Users, Plus, Github, Linkedin, Twitter, Image as ImageIcon } from 'lucide-react';

export default function UserAccountPage() {
  const [formData, setFormData] = useState({
    tagline: '',
    lookingForTeam: true,
    lookingForMembers: false,
    fullName: '',
    username: '',
    email: '',
    gender: '',
    age: '',
    location: '',
    college: '',
    degree: '',
    year: '',
    skills: '',
    primaryRole: '',
    experienceLevel: '',
    aboutMe: '',
    interestedDomains: '',
    availability: '',
    preferredTeamRole: '',
    github: '',
    linkedin: '',
    twitter: '',
    projects: 'College predictor, laptop advisor, cuet',
    hackathonsParticipated: 12,
    teamsBuilt: 8,
    projectsCreated: 10,
    collaborators: 'Aarif, Divyansh, Arpit, Mohit',
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
        ...prev,
        lookingForTeam: value === 'join',
        lookingForMembers: value === 'add',
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = { ...formData, avatar: avatarFile };
    console.log('Profile Data:', submitData);
    alert('Profile saved!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF] p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="doodle-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-16 h-16 rounded-full object-cover shadow-lg flex-shrink-0"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
              )}
              <label className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              placeholder="Your Tagline (e.g., Full-Stack Developer)"
              className="doodle-input w-full"
            />
          </div>

          {/* Team Preferences */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Team Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl">
                <input type="radio" name="teamPreference" value="join" checked={formData.lookingForTeam} onChange={handleRadioChange} className="h-5 w-5 text-orange-500 focus:ring-orange-400"/>
                <span className="text-sm">Are you looking for a team to join?</span>
              </label>
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl">
                <input type="radio" name="teamPreference" value="add" checked={formData.lookingForMembers} onChange={handleRadioChange} className="h-5 w-5 text-orange-500 focus:ring-orange-400"/>
                <span className="text-sm">Are you looking for members to add?</span>
              </label>
            </div>
          </div>

          {/* Main Details Section */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="doodle-input" />
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="doodle-input" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="doodle-input" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="doodle-input">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="doodle-input" min="18" max="100" />
              <input type="text" name="location" placeholder="Location (City, State)" value={formData.location} onChange={handleChange} className="doodle-input" />
            </div>
          </div>

          {/* Education */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Education</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="college" placeholder="College/University" value={formData.college} onChange={handleChange} className="doodle-input" />
              <input type="text" name="degree" placeholder="Degree (e.g., B.Tech in CS)" value={formData.degree} onChange={handleChange} className="doodle-input" />
              <input type="text" name="year" placeholder="Year of Study/Graduation (e.g., 2026)" value={formData.year} onChange={handleChange} className="doodle-input sm:col-span-2" />
            </div>
          </div>
          
          {/* Skills & Experience */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Skills & Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="skills" placeholder="Skills (comma-separated, e.g., Python, React)" value={formData.skills} onChange={handleChange} className="doodle-input" />
              <input type="text" name="primaryRole" placeholder="Primary Role (e.g., Full-Stack Developer)" value={formData.primaryRole} onChange={handleChange} className="doodle-input" />
              <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="doodle-input">
                <option value="">Select Experience Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <input type="text" name="interestedDomains" placeholder="Interested Domains (comma-separated)" value={formData.interestedDomains} onChange={handleChange} className="doodle-input" />
              <input type="text" name="availability" placeholder="Availability (e.g., Weekends, Evenings)" value={formData.availability} onChange={handleChange} className="doodle-input" />
              <input type="text" name="preferredTeamRole" placeholder="Preferred Team Role (e.g., Frontend Lead)" value={formData.preferredTeamRole} onChange={handleChange} className="doodle-input sm:col-span-2" />
              <textarea name="aboutMe" placeholder="About Me (Tell us about yourself in 2-3 sentences)" value={formData.aboutMe} onChange={handleChange} className="doodle-input sm:col-span-2 h-24 resize-none" />
            </div>
          </div>

          {/* Social Links */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input type="url" name="github" placeholder="github.com/yourusername" value={formData.github} onChange={handleChange} className="doodle-input flex-1" />
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input type="url" name="linkedin" placeholder="linkedin.com/in/yourusername" value={formData.linkedin} onChange={handleChange} className="doodle-input flex-1" />
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input type="url" name="twitter" placeholder="twitter.com/yourusername" value={formData.twitter} onChange={handleChange} className="doodle-input flex-1" />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Projects</h3>
            <textarea name="projects" placeholder="Your projects (comma-separated, e.g., Project1, Project2)..." value={formData.projects} onChange={handleChange} className="doodle-input w-full h-28 resize-none" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <button type="button" className="doodle-button w-full">My Projects</button>
          <button type="button" className="doodle-button w-full">My Teams</button>
          <button type="button" className="doodle-button w-full">Badges</button>
          
          <button type="submit" className="doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white w-full">Create Profile</button>

          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Profile Stats</h3>
            <div className="space-y-3 text-center">
              <div className="flex justify-between items-center">
                <span>Participated in</span>
                <input type="number" name="hackathonsParticipated" value={formData.hackathonsParticipated} onChange={handleChange} className="doodle-input w-20 text-center" min="0" />
                <span>hackathons</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Built</span>
                <input type="number" name="teamsBuilt" value={formData.teamsBuilt} onChange={handleChange} className="doodle-input w-20 text-center" min="0" />
                <span>teams</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Created</span>
                <input type="number" name="projectsCreated" value={formData.projectsCreated} onChange={handleChange} className="doodle-input w-20 text-center" min="0" />
                <span>projects</span>
              </div>
            </div>
          </div>

          <div className="doodle-card p-4 text-center">
            <p className="font-bold text-lg">Views: 8286</p>
          </div>

          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Recently Worked With</h3>
            <textarea 
              name="collaborators" 
              placeholder="Add collaborators (comma-separated, e.g., Aarif, Divyansh)..." 
              value={formData.collaborators} 
              onChange={handleChange} 
              className="doodle-input w-full h-24 resize-none" 
            />
          </div>
        </div>
      </form>
    </div>
  );
}