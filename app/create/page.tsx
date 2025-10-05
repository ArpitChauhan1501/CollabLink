'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Rocket, Plus, X, CircleCheck as CheckCircle } from 'lucide-react';

export default function CreatePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hackathon: '',
    teamSize: 0,
    slotsLeft: 0,
    skillsNeeded: [] as string[],
  });
  const [currentSkill, setCurrentSkill] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [projectType, setProjectType] = useState<'personal' | 'hackathon'>('personal');

  const handleAddSkill = () => {
    if (currentSkill.trim() && !formData.skillsNeeded.includes(currentSkill.trim())) {
      setFormData({
        ...formData,
        skillsNeeded: [...formData.skillsNeeded, currentSkill.trim()],
      });
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skillsNeeded: formData.skillsNeeded.filter((skill: string) => skill !== skillToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      router.push('/my-teams');
    }, 2000);
  };

  const popularHackathons = [
    'HackTheNorth 2025',
    'MLH Local Hack Day',
    'TechCrunch Disrupt',
    'ETHGlobal',
    'Google Solution Challenge',
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD93D] to-[#FFAA33] rounded-3xl flex items-center justify-center border-4 border-[#2D3648] shadow-xl transform -rotate-3 bounce-hover">
                <Rocket className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#FF9A62] rounded-full border-[3px] border-[#2D3648]"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-4">
            Create Your <span className="squiggle-underline">Team</span>
          </h1>
          <p className="text-lg text-[#2D3648]/70 font-semibold max-w-2xl mx-auto">
            Start building your dream team for your next hackathon
          </p>
        </div>

        <div className="doodle-card p-8 rounded-3xl shadow-2xl bg-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                Team Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="personal"
                    checked={projectType === 'personal'}
                    onChange={() => setProjectType('personal')}
                    className="hidden"
                  />
                  <span className={`px-4 py-2 rounded-full font-bold text-sm ${projectType === 'personal' ? 'bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white' : 'bg-white text-[#2D3648] border border-[#2D3648]/20'}`}>
                    Personal Team
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="hackathon"
                    checked={projectType === 'hackathon'}
                    onChange={() => setProjectType('hackathon')}
                    className="hidden"
                  />
                  <span className={`px-4 py-2 rounded-full font-bold text-sm ${projectType === 'hackathon' ? 'bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white' : 'bg-white text-[#2D3648] border border-[#2D3648]/20'}`}>
                    Hackathon Team
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                Team Name
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
                placeholder="e.g., Code Warriors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                Team Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold resize-none text-base"
                placeholder="Describe your team and what you're building..."
                rows={5}
                required
              />
            </div>

            {projectType === 'hackathon' && (
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                  Hackathon Name
                </label>
                <input
                  type="text"
                  value={formData.hackathon}
                  onChange={(e) => setFormData({ ...formData, hackathon: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
                  placeholder="e.g., HackTheNorth 2025"
                  required
                />
                <div className="flex flex-wrap gap-3 justify-start">
                  {popularHackathons.map((hackathon: string) => (
                    <button
                      key={hackathon}
                      type="button"
                      onClick={() => setFormData({ ...formData, hackathon: hackathon })}
                      className="px-5 py-3 bg-[#6DD5ED]/20 hover:bg-[#6DD5ED]/30 text-[#2D3648] rounded-full text-sm font-bold border-2 border-[#2D3648]/20 transition-all flex-shrink-0"
                    >
                      {hackathon}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                Kitne Team Member Chaiye (Total Team Size)
              </label>
              <input
                type="number"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 0 })}
                className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
                placeholder="e.g., 4"
                min="1"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                No. of Users Left (Available Slots)
              </label>
              <input
                type="number"
                value={formData.slotsLeft}
                onChange={(e) => setFormData({ ...formData, slotsLeft: parseInt(e.target.value) || 0 })}
                className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
                placeholder="e.g., 3"
                min="0"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
                Skills Needed
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  className="flex-1 px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
                  placeholder="e.g., React, Python, UI/UX"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="doodle-button bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white hover:from-[#5DC5DD] hover:to-[#1883A0] flex items-center space-x-2 px-6 py-4 rounded-2xl min-w-[80px] justify-center"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add</span>
                </button>
              </div>

              {formData.skillsNeeded.length > 0 && (
                <div className="flex flex-wrap gap-3 justify-start">
                  {formData.skillsNeeded.map((skill: string) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white rounded-full border-[3px] border-[#2D3648] font-bold text-sm flex-shrink-0"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:scale-110 transition-transform"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full doodle-button bg-gradient-to-r from-[#FFD93D] to-[#FFAA33] text-white hover:from-[#FFC91D] hover:to-[#FF9A23] text-lg flex items-center justify-center space-x-2 py-4 rounded-2xl font-bold text-base"
            >
              <Rocket className="w-5 h-5" />
              <span>Create Team</span>
            </button>
          </form>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="doodle-card max-w-md w-full text-center animate-in fade-in zoom-in duration-300 p-8 rounded-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6DD5ED] to-[#2193B0] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#2D3648]">
                <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3648] mb-2">
                Team Created!
              </h2>
              <p className="text-[#2D3648]/70 font-semibold">
                Redirecting to your teams...
              </p>
            </div>
          </div>
        )}
      </div>
      </div>
    </ProtectedRoute>
  );
}