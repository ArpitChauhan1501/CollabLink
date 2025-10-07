'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Users, Calendar, Code, Palette, Database, Brain, Smartphone, Trophy, Heart, ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Study Buddy',
    description: 'Building an intelligent learning companion that adapts to your study style using machine learning. Features include personalized quizzes, progress tracking, and adaptive difficulty levels based on user performance.',
    hackathon: 'HackTheNorth 2025',
    skillsNeeded: ['React', 'Python', 'TensorFlow', 'Machine Learning', 'API Integration'],
    icon: Brain,
    color: 'from-[#FF9A62] to-[#FF6B9D]',
    members: 2,
    maxMembers: 4,
    tags: ['AI', 'Education', 'ML'],
    progress: 'In Progress',
    deadline: 'October 15, 2025',
  },
  {
    id: 2,
    title: 'EcoTracker Mobile App',
    description: 'Track your carbon footprint and get personalized sustainability tips through a beautiful mobile interface. Includes daily challenges, community leaderboards, and integration with smart home devices.',
    hackathon: 'MLH Local Hack Day',
    skillsNeeded: ['React Native', 'Node.js', 'UI/UX', 'Firebase', 'Google Maps API'],
    icon: Smartphone,
    color: 'from-[#6DD5ED] to-[#2193B0]',
    members: 3,
    maxMembers: 4,
    tags: ['Sustainability', 'Mobile', 'IoT'],
    progress: 'Planning',
    deadline: 'November 10, 2025',
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'Creating a secure and transparent voting platform using blockchain technology for student elections. Features zero-knowledge proofs, real-time tallying, and mobile voting capabilities.',
    hackathon: 'TechCrunch Disrupt',
    skillsNeeded: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Security'],
    icon: Database,
    color: 'from-[#FFD93D] to-[#FFAA33]',
    members: 1,
    maxMembers: 3,
    tags: ['Blockchain', 'Security', 'Democracy'],
    progress: 'Ideation',
    deadline: 'September 30, 2025',
  },
  {
    id: 4,
    title: 'Mental Health Chatbot',
    description: 'An empathetic AI chatbot providing mental health support and resources to students in need. Includes mood tracking, crisis intervention, and connections to professional help.',
    hackathon: 'HackTheNorth 2025',
    skillsNeeded: ['Python', 'NLP', 'Flask', 'Dialogflow', 'Psychology'],
    icon: Brain,
    color: 'from-[#FF9A62] to-[#FF6B9D]',
    members: 2,
    maxMembers: 4,
    tags: ['Health', 'AI', 'NLP'],
    progress: 'Development',
    deadline: 'October 20, 2025',
  },
  {
    id: 5,
    title: 'Code Collaboration Platform',
    description: 'Real-time collaborative coding environment with integrated video chat and whiteboard features. Supports multiple languages, version control, and team management tools.',
    hackathon: 'MLH Local Hack Day',
    skillsNeeded: ['WebRTC', 'Socket.io', 'MongoDB', 'VS Code API', 'Collaboration'],
    icon: Code,
    color: 'from-[#6DD5ED] to-[#2193B0]',
    members: 3,
    maxMembers: 5,
    tags: ['DevTools', 'Real-time', 'Web'],
    progress: 'Prototyping',
    deadline: 'November 05, 2025',
  },
  {
    id: 6,
    title: 'Design System Generator',
    description: 'Automatically generate consistent design systems and component libraries from design mockups. Includes theme customization, accessibility checks, and export to various frameworks.',
    hackathon: 'TechCrunch Disrupt',
    skillsNeeded: ['Figma API', 'React', 'TypeScript', 'Storybook', 'Design'],
    icon: Palette,
    color: 'from-[#FFD93D] to-[#FFAA33]',
    members: 2,
    maxMembers: 4,
    tags: ['Design', 'Automation', 'UI'],
    progress: 'Research',
    deadline: 'October 25, 2025',
  },
];

export default function ExplorePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.description.toLowerCase().includes(query.toLowerCase()) ||
          project.hackathon.toLowerCase().includes(query.toLowerCase()) ||
          project.skillsNeeded.some((skill) =>
            skill.toLowerCase().includes(query.toLowerCase())
          )
      );
      setFilteredProjects(filtered);
    }
  };

  const toggleBookmark = (id: number) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarks(newBookmarks);
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border-2 border-[#2D3648]/30 hover:bg-[#FFD93D]/20 transition-all text-[#2D3648] font-semibold shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6DD5ED] to-[#2193B0] rounded-3xl flex items-center justify-center border-4 border-[#2D3648] shadow-xl transform rotate-3 bounce-hover">
                <Trophy className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#FFD93D] rounded-full border-[3px] border-[#2D3648]"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-4">
            Explore <span className="squiggle-underline">Teams</span>
          </h1>
          <p className="text-lg text-[#2D3648]/70 font-semibold max-w-2xl mx-auto">
            Discover exciting projects and join teams that match your skills and interests
          </p>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#2D3648]/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, skills, or hackathons..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-3xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all text-[#2D3648] font-semibold shadow-lg"
            />
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <p className="text-[#2D3648]/70 font-semibold">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isBookmarked = bookmarks.has(project.id);
            return (
              <div key={project.id} className="doodle-card group min-h-[650px] p-6 flex flex-col relative">
                <button
                  onClick={() => toggleBookmark(project.id)}
                  className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full border-2 border-[#2D3648]/30 hover:bg-[#FFD93D]/20 transition-all z-10"
                >
                  <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-[#FFD93D] text-[#FFD93D]' : 'text-[#2D3648]/50'}`} />
                </button>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center border-[3px] border-[#2D3648] group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#FFD93D]/20 rounded-full border-2 border-[#2D3648]">
                    <Users className="w-5 h-5 text-[#2D3648]" />
                    <span className="text-base font-bold text-[#2D3648]">
                      {project.members}/{project.maxMembers}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                  {project.title}
                </h3>

                <p className="text-[#2D3648]/70 font-semibold mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-2 mb-6 text-[#2D3648]/60 text-base">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{project.hackathon}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-bold text-[#2D3648]/50 mb-3 uppercase tracking-wide">
                    Skills Needed
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.skillsNeeded.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-[#6DD5ED]/20 to-[#2193B0]/20 text-[#2D3648] rounded-full text-sm font-bold border-2 border-[#2D3648]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-bold text-[#2D3648]/50 mb-2 uppercase tracking-wide">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-[#FF9A62]/20 text-[#2D3648] rounded-full text-xs font-bold border border-[#2D3648]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-[#2D3648]/60 mb-6">
                  <span>Status: <span className="font-semibold">{project.progress}</span></span>
                  <span>Deadline: {project.deadline}</span>
                </div>

                <button className="self-center w-48 doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white hover:from-[#FF8A52] hover:to-[#FF5B8D] py-3 text-base mt-auto">
                  Join Team
                </button>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#2D3648]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-[#2D3648]/30" />
            </div>
            <h3 className="text-2xl font-bold text-[#2D3648] mb-2">
              No projects found
            </h3>
            <p className="text-[#2D3648]/70 font-semibold">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
