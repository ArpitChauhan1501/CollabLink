'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';
import { Search, Filter, MessageCircle, Save, Users, MapPin, DollarSign, Calendar, MessageSquare, Plus, Eye, ArrowRight, Rocket, Zap, X, Trophy, Clock, Briefcase, Menu, User as UserIcon } from 'lucide-react';

type Hackathon = {
  id: number;
  name: string;
  organizer: string;
  location: string;
  price: string;
  deadline: string;
  description: string;
  date: string;
  prizes: string;
  themes: string[];
};

export default function Home() {
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hackathons: Hackathon[] = [
    {
      id: 1,
      name: 'BPUT Hackathons 2025',
      organizer: 'Biju Patnaik University of Technology',
      location: 'Odisha, IN',
      price: 'Free',
      deadline: 'Oct 10, 2025',
      description: 'A series of hackathons for engineering students focusing on AI, Robotics, and Startups.',
      date: 'October–December 2025',
      prizes: 'Cash prizes and recognition',
      themes: ['AI', 'Robotics', 'Startups'],
    },
    {
      id: 2,
      name: 'HACK<N>PITCH',
      organizer: 'HACKNPITCH',
      location: 'Virtual',
      price: 'Free',
      deadline: 'Oct 31, 2025',
      description: 'A hackathon emphasizing Generative AI, Agentic AI, Web3, and Cybersecurity, requiring diverse teams.',
      date: 'November 7-8, 2025',
      prizes: 'Cash prizes',
      themes: ['Generative AI', 'Agentic AI', 'Web3', 'Cybersecurity'],
    },
    {
      id: 3,
      name: 'MumbaiHacks 2025',
      organizer: 'MumbaiHacks',
      location: 'Mumbai, MH',
      price: 'Free',
      deadline: 'Oct 17, 2025',
      description: 'India\'s premier AI hackathon emphasizing Agentic AI, bringing together over 3,000 innovators to solve real-world problems.',
      date: 'November 2025',
      prizes: '₹50 Lakh in rewards',
      themes: ['Agentic AI', 'Fintech', 'Healthtech', 'Misinformation'],
    },
  ];

  const participants = [
    {
      id: 1,
      name: 'Priya Sharma',
      college: 'IIT Delhi',
      location: 'New Delhi, DL',
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Aspiring AI researcher with experience in building predictive models for social good. Passionate about using tech for sustainable development in India.',
      experience: '2 years',
      availability: 'Available weekends and evenings',
      github: 'https://github.com/priyasharma',
      linkedin: 'https://linkedin.com/in/priyasharma',
    },
    {
      id: 2,
      name: 'Raj Kumar',
      college: 'BITS Pilani',
      location: 'Pilani, RJ',
      skills: ['React', 'Node.js', 'Blockchain'],
      bio: 'Full-stack developer specializing in decentralized applications. Eager to collaborate on innovative Web3 projects for the Indian ecosystem.',
      experience: '3 years',
      availability: 'Full-time available during hackathons',
      github: 'https://github.com/rajkumar',
      linkedin: 'https://linkedin.com/in/rajkumar',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'AgriAI Advisor',
      type: 'Mobile App',
      tags: ['AI', 'AgriTech'],
      description: 'AI-powered app to provide farming advice and market insights to Indian farmers',
      progress: '3/5',
    },
    {
      id: 2,
      name: 'BlockVote India',
      type: 'Web App',
      tags: ['Blockchain', 'CivicTech'],
      description: 'Secure blockchain-based voting system for transparent elections in rural India',
      progress: '2/4',
    },
    {
      id: 3,
      name: 'WaterWise Tracker',
      type: 'IoT App',
      tags: ['Sustainability', 'IoT'],
      description: 'IoT solution for monitoring and optimizing water usage in urban Indian households',
      progress: '1/5',
    },
  ];

  const closeModal = () => setSelectedHackathon(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F0F8FF]">
      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden bg-white shadow-lg`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="logo-container relative">
              <div className="logo-circle w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <UserIcon className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
              <div className="logo-dot absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-md"></div>
            </div>
            <span className="text-xl font-bold text-[#2D3648]">CollabLink</span>
          </div>
          <button onClick={toggleMenu} className="p-1 text-[#2D3648] hover:text-[#FF9A62] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link href="/" className="px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors">Home</Link>
          <Link href="/explore" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Explore Teams</Link>
          <Link href="/create" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Create Project</Link>
          <Link href="/my-teams" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">My Teams</Link>
          <Link href="/signin" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Sign In</Link>
          <Link href="/login" className="doodle-button bg-white text-[#2D3648] text-sm px-4 py-2">Login</Link>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#2D3648]/20 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="logo-container relative">
              <div className="logo-circle w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
                <UserIcon className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
              <div className="logo-dot absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-md"></div>
            </div>
            <span className="text-xl font-bold text-[#2D3648]">CollabLink</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors">Home</Link>
            <Link href="/explore" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Explore Teams</Link>
            <Link href="/create" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Create Project</Link>
            <Link href="/my-teams" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">My Teams</Link>
          </nav>
          {/* Desktop Auth Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/signin" className="px-4 py-2 text-[#2D3648] hover:text-[#FF9A62] font-semibold transition-colors">Sign In</Link>
            <Link href="/login" className="doodle-button bg-white text-[#2D3648] text-sm px-4 py-2">Login</Link>
          </div>
          {/* Mobile Hamburger */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-1 text-[#2D3648] hover:text-[#FF9A62] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section - With exact buttons below main text */}
      <section className="relative py-20 px-4 overflow-hidden text-center mb-12">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD93D] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#FF9A62] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-[#6DD5ED] rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-3xl flex items-center justify-center border-4 border-[#2D3648] shadow-xl transform -rotate-6 bounce-hover">
                <Rocket className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD93D] rounded-full border-[3px] border-[#2D3648] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#2D3648]" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2D3648] mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="squiggle-underline inline-block">Hackathon Team</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#2D3648]/70 mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
            Connect with talented developers, designers, and innovators. Build amazing projects together at hackathons worldwide.
          </p>

          {/* Exact buttons below main text */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/explore"
              className="doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white hover:from-[#FF8A52] hover:to-[#FF5B8D] flex items-center space-x-2 text-lg"
            >
              <span>Start Exploring Teams</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/useraccount"
              className="doodle-button bg-white text-[#2D3648] hover:bg-[#FFD93D]/20 flex items-center space-x-2 text-lg"
            >
              <Users className="w-5 h-5" />
              <span>Create Account</span>
            </Link>
          </div>

          {/* Search below buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search hackathons, teams, or skills..."
                className="doodle-input bg-white/50 w-full max-w-md"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2D3648] w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participants.map((participant) => (
              <div key={participant.id} className="doodle-card p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-full flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
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
            <div className="doodle-card p-6 md:p-8 flex items-center justify-center col-span-1">
              <Link href="/participants" className="text-[#FF9A62] font-bold flex items-center">
                View more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
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

        {/* Chatbot Section at the end */}
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
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-[#FF9A62]" />
                  <span className="font-semibold">Deadline:</span> {selectedHackathon.deadline}
                </div>
                <div className="flex items-center">
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
  );
}