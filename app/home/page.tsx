'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Search, Filter, MessageCircle, Save, Users, MapPin, DollarSign, Calendar, User, MessageSquare, Plus, Eye, ArrowRight, X, Trophy, Linkedin, Instagram, Menu, Edit, FilePlus, Rocket, Zap, Clock, Briefcase } from 'lucide-react';

type Hackathon = {
  id: number;
  name: string;
  organizer: string;
  location: string;
  price: string;
  deadline: string;
  date: string;
  prizes: string;
  description: string;
  themes: string[];
};

export default function HomePage() {
  const { logout } = useAuth();
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const hackathons = [
    {
      id: 1,
      name: 'HackTheNorth 2025',
      organizer: 'University of Waterloo',
      location: 'Waterloo, ON',
      price: '$50',
      deadline: 'Oct 15, 2025',
      date: 'October 17-19, 2025',
      prizes: 'Over $100,000 in prizes',
      description: 'Canada\'s largest hackathon, bringing together students from across the country to innovate and collaborate.',
      themes: ['AI', 'Sustainability', 'Health Tech'],
    },
    {
      id: 2,
      name: 'MLH Local Hack Day',
      organizer: 'Major League Hacking',
      location: 'Virtual',
      price: 'Free',
      deadline: 'Nov 1, 2025',
      date: 'November 8-9, 2025',
      prizes: 'Swag and mentorship opportunities',
      description: 'A global virtual hackathon focused on local impact and learning new skills.',
      themes: ['Open Source', 'Web Dev', 'Mobile'],
    },
    {
      id: 3,
      name: 'TechCrunch Disrupt',
      organizer: 'TechCrunch',
      location: 'San Francisco, CA',
      price: '$200',
      deadline: 'Sep 20, 2025',
      date: 'October 14-16, 2025',
      prizes: '$50,000 grand prize',
      description: 'The premier startup event with a hackathon for building the next big thing.',
      themes: ['Startups', 'FinTech', 'AR/VR'],
    },
  ];

  const savedHackathons = [
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

  const participants = [
    {
      id: 1,
      name: 'Alice Johnson',
      college: 'Stanford University',
      location: 'Palo Alto, CA',
      skills: ['React', 'Node.js', 'UI/UX Design'],
      bio: 'Passionate full-stack developer with 3 years of experience in building interactive web applications. Loves collaborating on innovative projects.',
      experience: '3 years',
      availability: 'Full-time available weekends',
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
    {
      id: 2,
      name: 'Bob Smith',
      college: 'MIT',
      location: 'Cambridge, MA',
      skills: ['Python', 'ML', 'Data Science'],
      bio: 'Machine learning enthusiast specializing in AI models for real-world applications. Eager to tackle challenging hackathon problems.',
      experience: '2 years',
      availability: 'Available evenings and weekends',
      github: 'https://github.com/bobsmith',
      linkedin: 'https://linkedin.com/in/bobsmith',
    },
    {
      id: 3,
      name: 'Carol Davis',
      college: 'Harvard University',
      location: 'Boston, MA',
      skills: ['JavaScript', 'Python', 'Database'],
      bio: 'Experienced developer interested in hackathons and team collaborations.',
      experience: '4 years',
      availability: 'Available full-time',
      github: 'https://github.com/caroldavis',
      linkedin: 'https://linkedin.com/in/caroldavis',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'AI Chatbot',
      type: 'Web App',
      tags: ['AI', 'Chatbot'],
      progress: '2/5',
      description: 'Chatbot for hackathons related doubts',
    },
    {
      id: 2,
      name: 'Sustainable Tracker',
      type: 'Mobile App',
      tags: ['Sustainability', 'IoT'],
      progress: '3/4',
      description: 'Track carbon footprint during events',
    },
    {
      id: 3,
      name: 'VR Collaboration Tool',
      type: 'VR App',
      tags: ['VR', 'Collaboration'],
      progress: '1/6',
      description: 'Virtual reality team building for remote hackathons',
    },
  ];

  const savedProjects = [
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
          <Link href="/profile" className="block px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors" onClick={closeMobileMenu}>
            Edit Profile
          </Link>
          <Link href="/create" className="block px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors" onClick={closeMobileMenu}>
            Create Project
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
            <Link href="/profile" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Edit Profile</Link>
            <Link href="/create" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Create Project</Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedHackathons.map((hack) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedProjects.map((project) => (
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

        {/* Hackathons Section */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-3xl font-bold text-[#2D3648]">Hackathons</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-[#2D3648]" />
              <span className="text-sm text-[#2D3648]/70">Filter</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {hackathons.map((hack) => (
              <div 
                key={hack.id} 
                className="doodle-card p-6 md:p-10 cursor-pointer hover:bg-blue-50 transition-colors" 
                onClick={() => setSelectedHackathon(hack)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#2D3648] text-lg md:text-xl">{hack.name}</h3>
                  <Save className="w-5 h-5 text-[#FF9A62]" />
                </div>
                <div className="space-y-3 text-sm text-[#2D3648]/70 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{hack.organizer}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{hack.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{hack.price}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#2D3648]/50">
                  <Calendar className="w-4 h-4 mr-2" />
                  Deadline: {hack.deadline}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/explore" className="doodle-button bg-white text-[#2D3648] text-sm px-6 py-2 flex items-center space-x-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Participants Section */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-3xl font-bold text-[#2D3648]">Participants</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search Profile" className="doodle-input w-full sm:w-48 bg-white/50 text-sm" />
              </div>
              <Filter className="w-5 h-5 text-[#2D3648]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {participants.map((participant) => (
              <div key={participant.id} className="doodle-card p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2D3648] text-lg">{participant.name}</h3>
                    <p className="text-sm text-[#2D3648]/70">{participant.college}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-[#2D3648]/50 mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  {participant.location}
                </div>
                <div className="space-y-2 mb-3">
                  <p className="text-sm text-[#2D3648]/80">{participant.bio}</p>
                  <div className="flex items-center justify-between text-xs text-[#2D3648]/60">
                    <div className="flex items-center">
                      <Briefcase className="w-3 h-3 mr-1" />
                      <span>{participant.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{participant.availability}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-1 mb-3">
                  {participant.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#FFD93D]/20 text-xs rounded-full text-[#2D3648]">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a href={participant.github} target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <MessageCircle className="w-4 h-4 text-[#FF9A62]" />
                  </a>
                  <a href={participant.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <Users className="w-4 h-4 text-[#2D3648]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/participants" className="doodle-button bg-white text-[#2D3648] text-sm px-6 py-2 flex items-center space-x-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-3xl font-bold text-[#2D3648]">Projects</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search Project" className="doodle-input w-full sm:w-48 bg-white/50 text-sm" />
              </div>
              <Filter className="w-5 h-5 text-[#2D3648]" />
              <Plus className="w-5 h-5 text-[#FF9A62] cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {projects.map((project) => (
              <div key={project.id} className="doodle-card p-6 md:p-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#2D3648] text-lg">{project.name}</h3>
                  <Save className="w-5 h-5 text-[#FF9A62]" />
                </div>
                <p className="text-sm text-[#2D3648]/70 mb-2">{project.type}</p>
                <div className="flex flex-wrap space-x-1 mb-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#6DD5ED]/20 text-sm rounded-full text-[#2D3648]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#2D3648]/70 mb-3">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-[#2D3648]/50">
                  <span>{project.progress}</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/projects" className="doodle-button bg-white text-[#2D3648] text-sm px-6 py-2 flex items-center space-x-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="mb-12">
          <div className="doodle-card p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-[#2D3648] text-xl">Chatbot for Hackathons Related Doubts</h3>
              <Save className="w-5 h-5 text-[#FF9A62]" />
            </div>
            <p className="text-[#2D3648]/70 text-lg mb-4">An intelligent assistant to answer all your hackathon queries, from team formation tips to project ideas.</p>
            <div className="flex justify-end">
              <Link href="/chatbot" className="doodle-button bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Start Chat</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Hackathon Modal */}
      {selectedHackathon && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-[#2D3648] hover:text-[#FF9A62] transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold text-[#2D3648] mb-4">{selectedHackathon.name}</h2>
            <p className="text-lg text-[#2D3648]/80 mb-6">{selectedHackathon.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Organizer:</span> {selectedHackathon.organizer}
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Location:</span> {selectedHackathon.location}
                </div>
                <div className="flex items-center mb-2">
                  <DollarSign className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Price:</span> {selectedHackathon.price}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Event Date:</span> {selectedHackathon.date}
                </div>
                {selectedHackathon.themes.map((theme: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-[#6DD5ED]/20 text-xs rounded-full text-[#2D3648]">
                    {theme}
                  </span>
                ))}
                <div className="flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Prizes:</span> {selectedHackathon.prizes}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <span className="font-semibold text-[#2D3648]">Themes:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedHackathon.themes.map((theme, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#6DD5ED]/20 text-xs rounded-full text-[#2D3648]">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href="/explore" className="doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Find Teams</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </ProtectedRoute>
  );
}