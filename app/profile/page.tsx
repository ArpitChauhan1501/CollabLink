'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Filter, MessageCircle, Save, Users, MapPin, DollarSign, Calendar, User, MessageSquare, Plus, Eye, ArrowRight, X, Trophy } from 'lucide-react';

export default function Home() {
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const hackathons = [
    {
      id: 1,
      name: 'HackTheNorth 2025',
      organizer: 'University of Waterloo',
      location: 'Waterloo, ON, Canada',
      price: '$50',
      deadline: 'Oct 15, 2025',
      date: 'Oct 17-19, 2025',
      prizes: 'Over $100,000 in cash & gadgets',
      description: 'Join Canada\'s largest hackathon with top-tier workshops and networking events.',
    },
    {
      id: 2,
      name: 'MLH Local Hack Day',
      organizer: 'Major League Hacking',
      location: 'Virtual (Global Participation)',
      price: 'Free',
      deadline: 'Nov 1, 2025',
      date: 'Nov 8-9, 2025',
      prizes: 'Exclusive swag & mentorship from industry experts',
      description: 'A global virtual event focusing on local innovation and skill-building.',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'AI Chatbot',
      type: 'Web App',
      tags: ['AI', 'Chatbot', 'NLP'],
      progress: '2/5',
      description: 'An intelligent chatbot to assist with hackathon queries and team coordination.',
      purpose: 'Enhance communication during events',
    },
    {
      id: 2,
      name: 'Sustainable Tracker',
      type: 'Mobile App',
      tags: ['Sustainability', 'IoT', 'GreenTech'],
      progress: '3/4',
      description: 'Track and reduce carbon footprint with real-time analytics.',
      purpose: 'Promote eco-friendly hackathon practices',
    },
  ];

  const closeModal = () => setSelectedHackathon(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#2D3648]/20 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="logo-container relative">
              <div className="logo-circle w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <User className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            </div>
            <span className="text-xl font-bold text-[#2D3648]">CollabLink</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors">Home</Link>
            <Link href="/explore" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Explore Teams</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/signin" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Sign In</Link>
            <Link href="/login" className="doodle-button bg-white text-[#2D3648] text-sm px-4 py-2">Login</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* User Greeting and Badges Section */}
        <section className="mb-12 text-center">
          <div className="flex items-center justify-start mb-6">
            <div className="logo-container relative mr-4">
              <div className="logo-circle w-12 h-12 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <User className="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#2D3648]">Hi Ankit</h2>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:bg-[#FF9A62] transition-all duration-300 transform hover:scale-110 animate-pulse-slow">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:bg-[#FF9A62] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-100">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:bg-[#FF9A62] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-200">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:bg-[#FF9A62] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>
        </section>

        {/* Saved Hackathons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#2D3648] mb-6">Saved Hackathons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hack) => (
              <div key={hack.id} className="doodle-card p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-4 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Deadline</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.deadline}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Organizer</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.organizer}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Location</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.location}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Price</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.price}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Date</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.date}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Prizes</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{hack.prizes}</p>
                    </div>
                  </div>
                  <button className="text-[#FF9A62] hover:text-[#FF6B9D] transition-colors ml-4">
                    <Save className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-[#2D3648]/70 mt-4">{hack.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#2D3648] mb-6">Saved Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="doodle-card p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-4 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Progress</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{project.progress}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Purpose</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{project.purpose}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Type</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{project.type}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Name</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{project.name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Description</p>
                      <p className="text-sm text-[#2D3648] w-2/3 text-right">{project.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-[#2D3648] w-1/3">Tags</p>
                      <div className="text-sm text-[#2D3648] w-2/3 text-right flex flex-wrap justify-end gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#6DD5ED]/20 text-sm rounded-full text-[#2D3648]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="text-[#FF9A62] hover:text-[#FF6B9D] transition-colors ml-4">
                    <Save className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
