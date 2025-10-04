'use client';

import React, { useState } from 'react';
import { User, Save, Users, Plus } from 'lucide-react';

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
    projects: 'College predictor, laptop advisor, cuet',
  });

  const [collaborators, setCollaborators] = useState(['Aarif', 'Divyansh', 'Arpit', 'Mohit']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    console.log('Profile Data:', formData);
    alert('Profile saved!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF] p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="doodle-card p-4 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <User className="w-8 h-8 text-white" />
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
          <div className="doodle-card p-4 space-y-3">
            <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl">
              <input type="radio" name="teamPreference" value="join" checked={formData.lookingForTeam} onChange={handleRadioChange} className="h-5 w-5 text-orange-500 focus:ring-orange-400"/>
              <span>Are you looking for team to join?</span>
            </label>
            <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl">
              <input type="radio" name="teamPreference" value="add" checked={formData.lookingForMembers} onChange={handleRadioChange} className="h-5 w-5 text-orange-500 focus:ring-orange-400"/>
              <span>Are you looking for members to add?</span>
            </label>
          </div>

          {/* Main Details Section */}
          <div className="doodle-card p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="sm:col-span-2 text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-2">Personal Details</h3>
            <input type="text" name="fullName" placeholder="full name" value={formData.fullName} onChange={handleChange} className="doodle-input" />
            <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange} className="doodle-input" />
            <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} className="doodle-input" />
            <input type="text" name="gender" placeholder="gender" value={formData.gender} onChange={handleChange} className="doodle-input" />
            <input type="number" name="age" placeholder="age" value={formData.age} onChange={handleChange} className="doodle-input" />
            <input type="text" name="location" placeholder="location" value={formData.location} onChange={handleChange} className="doodle-input" />
          </div>

          {/* Education */}
          <div className="doodle-card p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="sm:col-span-2 text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-2">Education</h3>
            <input type="text" name="college" placeholder="college" value={formData.college} onChange={handleChange} className="doodle-input" />
            <input type="text" name="degree" placeholder="degree" value={formData.degree} onChange={handleChange} className="doodle-input" />
            <input type="text" name="year" placeholder="year" value={formData.year} onChange={handleChange} className="doodle-input sm:col-span-2" />
          </div>
          
          {/* Skills & Experience */}
          <div className="doodle-card p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="sm:col-span-2 text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-2">Skills & Experience</h3>
            <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} className="doodle-input" />
            <input type="text" name="primaryRole" placeholder="primary role" value={formData.primaryRole} onChange={handleChange} className="doodle-input" />
            <input type="text" name="experienceLevel" placeholder="experience level" value={formData.experienceLevel} onChange={handleChange} className="doodle-input" />
            <textarea name="aboutMe" placeholder="About me" value={formData.aboutMe} onChange={handleChange} className="doodle-input sm:col-span-2 h-24" />
            <input type="text" name="interestedDomains" placeholder="interested domains" value={formData.interestedDomains} onChange={handleChange} className="doodle-input" />
            <input type="text" name="availability" placeholder="availability" value={formData.availability} onChange={handleChange} className="doodle-input" />
            <input type="text" name="preferredTeamRole" placeholder="preferred team role" value={formData.preferredTeamRole} onChange={handleChange} className="doodle-input sm:col-span-2" />
          </div>

          {/* Projects */}
          <div className="doodle-card p-6">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Projects</h3>
            <textarea name="projects" placeholder="Your projects..." value={formData.projects} onChange={handleChange} className="doodle-input w-full h-28" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <button type="button" className="doodle-button w-full">My Projects</button>
          <button type="button" className="doodle-button w-full">My Teams</button>
          <button type="button" className="doodle-button w-full">Badges</button>
          
          <button type="submit" className="doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white w-full">Create Profile</button>

          <div className="doodle-card p-4 text-center">
            <p className="font-bold text-lg">Views: 8286</p>
          </div>

          <div className="doodle-card p-4 text-center space-y-2">
            <p>participated in <strong>12</strong> hackathons</p>
            <p>built <strong>8</strong> teams</p>
            <p>created <strong>10</strong> projects</p>
          </div>

          <div className="doodle-card p-4">
            <h3 className="text-lg font-bold text-[#2D3648] border-b-2 border-gray-200 pb-2 mb-4">Recently worked with peoples</h3>
            <div className="space-y-2">
              {collaborators.map(name => (
                <label key={name} className="flex items-center gap-3">
                  <input type="checkbox" className="h-5 w-5 text-orange-500 focus:ring-orange-400" />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}