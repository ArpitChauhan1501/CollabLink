'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Search, Filter, MessageCircle, Save, Users, MapPin, DollarSign, Calendar, User, MessageSquare, Plus, Eye, ArrowRight, X, Trophy, Linkedin, Instagram, Menu, Edit, FilePlus } from 'lucide-react';

export default function HomePage() {
  const { logout } = useAuth();
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const hackathons = [
    {
      id: 1,
      name: 'MumbaiHacks 2025',
      organizer: 'MumbaiHacks',
      location: 'Mumbai, India',
      price: 'Free',
      deadline: 'Nov 20, 2025',
      date: 'Nov 28-29, 2025',
      prizes: '₹50 Lakh in rewards',
      description: 'India\'s largest hackathon bringing together 3,000 innovators to solve real-world challenges.',
    },
    {
      id: 2,
      name: 'Smart India Hackathon 2025',
      organizer: 'Ministry of Education, Govt. of India',
      location: 'Multiple Cities, India',
      price: 'Free',
      deadline: 'Nov 15, 2025',
      date: 'Dec 1-2, 2025',
      prizes: '₹1 Crore+ in prizes & opportunities',
      description: 'National-level initiative to foster innovation and problem-solving using technology for societal impact.',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'AgriSense',
      type: 'Mobile App',
      tags: ['AI', 'Agriculture', 'IoT'],
      progress: '3/5',
      description: 'IoT-based soil monitoring and AI crop recommendation system tailored for Indian farmers.',
      purpose: 'Boost agricultural productivity and sustainability in rural India',
    },
    {
      id: 2,
      name: 'SwachhCity',
      type: 'Web App',
      tags: ['Sustainability', 'ML', 'CivicTech'],
      progress: '2/4',
      description: 'ML-powered platform to optimize waste collection routes and promote recycling in urban Indian cities.',
      purpose: 'Enhance urban cleanliness and environmental awareness through smart civic solutions',
    },
  ];

  const closeModal = () => setSelectedHackathon(null);

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF]">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={closeMobileMenu} />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-sm border-r border-[#2D3648]/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-[#2D3648]/20">
          <div className="flex items-center space-x-2">
            <div className="logo-container relative">
              <div className="logo-circle w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <User className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            </div>
            <span className="text-xl font-bold text-[#2D3648]">CollabLink</span>
          </div>
          <button onClick={closeMobileMenu} className="text-[#2D3648]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link href="/" className="block px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/explore" className="block px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors" onClick={closeMobileMenu}>
            Explore Teams
          </Link>
          <Link href="/edit-profile" className="flex items-center space-x-2 px-4 py-2 bg-white text-[#2D3648] rounded-full text-sm font-semibold border border-[#FF9A62]/20 hover:bg-[#FF9A62]/5 transition-colors shadow-md hover:shadow-lg" onClick={closeMobileMenu}>
            <Edit className="w-4 h-4 text-[#FF9A62]" />
            <span>Edit Profile</span>
          </Link>
          <Link href="/create-project" className="flex items-center space-x-2 px-4 py-2 bg-white text-[#2D3648] rounded-full text-sm font-semibold border border-[#6DD5ED]/20 hover:bg-[#6DD5ED]/5 transition-colors shadow-md hover:shadow-lg" onClick={closeMobileMenu}>
            <FilePlus className="w-4 h-4 text-[#6DD5ED]" />
            <span>Create Project</span>
          </Link>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button onClick={logout} className="w-full doodle-button bg-white text-[#2D3648] text-sm px-4 py-2 border border-[#2D3648]/20 rounded-full hover:bg-[#2D3648]/5 transition-colors">
            Log Out
          </button>
        </div>
      </div>

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
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors">Home</Link>
            <Link href="/explore" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Explore Teams</Link>
            <Link href="/edit-profile" className="flex items-center space-x-2 px-4 py-2 bg-white text-[#2D3648] rounded-full text-sm font-semibold border border-[#FF9A62]/20 hover:bg-[#FF9A62]/5 transition-colors shadow-md hover:shadow-lg">
              <Edit className="w-4 h-4 text-[#FF9A62]" />
              <span>Edit Profile</span>
            </Link>
            <Link href="/create-project" className="flex items-center space-x-2 px-4 py-2 bg-white text-[#2D3648] rounded-full text-sm font-semibold border border-[#6DD5ED]/20 hover:bg-[#6DD5ED]/5 transition-colors shadow-md hover:shadow-lg">
              <FilePlus className="w-4 h-4 text-[#6DD5ED]" />
              <span>Create Project</span>
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleMobileMenu} className="text-[#2D3648] p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={logout} className="doodle-button bg-white text-[#2D3648] text-sm px-4 py-2">Log Out</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* User Greeting and Badges Section */}
        <section className="mb-12 text-center">
          <div className="flex items-center justify-start mb-6">
            <img
              src="https://api.dicebear.com/7.x/avataaars/png?seed=Ankit&backgroundColor=FF9A62"
              alt="Ankit's avatar"
              className="w-16 h-16 rounded-full shadow-lg border-2 border-white/50 mr-4 object-cover"
            />
            <h2 className="text-2xl font-bold text-[#2D3648]">Hi Ankit</h2>
          </div>
          <div className="flex justify-start space-x-4 mb-6">
            <a
              href="https://linkedin.com/in/ankit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:bg-[#005885] transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8 text-white drop-shadow-sm" />
            </a>
            <a
              href="https://instagram.com/ankit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-r from-[#E4405F] to-[#F77737] rounded-full flex items-center justify-center shadow-md border-2 border-[#FF9A62] hover:from-[#D73554] hover:to-[#D63F1E] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-100"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-8 h-8 text-white drop-shadow-sm" />
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD93D] to-[#FF9A62] rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 hover:from-[#FF9A62] hover:to-[#FF6B9D] transition-all duration-300 transform hover:scale-110 animate-pulse-slow relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rounded-full blur" />
              <Trophy className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD93D] to-[#FF9A62] rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 hover:from-[#FF9A62] hover:to-[#FF6B9D] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rounded-full blur" />
              <Users className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD93D] to-[#FF9A62] rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 hover:from-[#FF9A62] hover:to-[#FF6B9D] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rounded-full blur" />
              <Calendar className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD93D] to-[#FF9A62] rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 hover:from-[#FF9A62] hover:to-[#FF6B9D] transition-all duration-300 transform hover:scale-110 animate-pulse-slow delay-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rounded-full blur" />
              <MapPin className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
            </div>
          </div>
        </section>

        {/* Saved Hackathons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#2D3648] mb-6">Saved Hackathons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hack) => (
              <div key={hack.id} className="doodle-card p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#2D3648]">{hack.name}</h3>
                  <button className="text-[#FF9A62] hover:text-[#FF6B9D] transition-colors">
                    <Save className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Deadline</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Organizer</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.organizer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Location</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Price</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Date</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Prizes</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{hack.prizes}</span>
                  </div>
                </div>
                <p className="text-sm text-[#2D3648]/70 mt-2">{hack.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#2D3648] mb-6">Saved Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="doodle-card p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#2D3648]">{project.name}</h3>
                  <button className="text-[#FF9A62] hover:text-[#FF6B9D] transition-colors">
                    <Save className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Progress</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{project.progress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Purpose</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{project.purpose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#2D3648]/70">Type</span>
                    <span className="text-lg font-semibold text-[#2D3648]">{project.type}</span>
                  </div>
                </div>
                <p className="text-sm text-[#2D3648]/70 mt-2 mb-3">{project.description}</p>
                <div className="flex space-x-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#6DD5ED]/20 text-sm rounded-full text-[#2D3648]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      </div>
    </ProtectedRoute>
  );
}