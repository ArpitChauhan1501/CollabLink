'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Users, Calendar, Code, Brain, MessageCircle, Settings, ExternalLink, ArrowLeft } from 'lucide-react';

const myTeams = [
  {
    id: 1,
    title: 'AI-Powered Study Buddy',
    role: 'Team Lead',
    hackathon: 'HackTheNorth 2025',
    members: 4,
    icon: Brain,
    color: 'from-[#FF9A62] to-[#FF6B9D]',
    status: 'Active',
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    title: 'Code Collaboration Platform',
    role: 'Frontend Developer',
    hackathon: 'MLH Local Hack Day',
    members: 5,
    icon: Code,
    color: 'from-[#6DD5ED] to-[#2193B0]',
    status: 'Active',
    lastActivity: '5 hours ago',
  },
];

export default function MyTeamsPage() {
  const router = useRouter();
  return (
    <div className="py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border-2 border-[#2D3648]/30 hover:bg-[#FFD93D]/20 transition-all text-[#2D3648] font-semibold shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-2xl flex items-center justify-center border-4 border-[#2D3648] shadow-xl transform rotate-3 bounce-hover">
                <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FFD93D] rounded-full border-[3px] border-[#2D3648]"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3648] mb-4">
            My <span className="squiggle-underline">Teams</span>
          </h1>
          <p className="text-base sm:text-lg text-[#2D3648]/70 font-semibold max-w-xl mx-auto">
            Manage your projects and collaborate with your teammates
          </p>
        </div>

        {myTeams.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#2D3648]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-[#2D3648]/30" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D3648] mb-4">
              No teams yet
            </h3>
            <p className="text-[#2D3648]/70 font-semibold mb-6 sm:mb-8">
              Start by creating a project or joining an existing team
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/create"
                className="doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white hover:from-[#FF8A52] hover:to-[#FF5B8D] py-3 px-6"
              >
                Create a Project
              </Link>
              <Link
                href="/explore"
                className="doodle-button bg-white text-[#2D3648] hover:bg-[#FFD93D]/20 py-3 px-6"
              >
                Explore Teams
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {myTeams.map((team) => {
              const Icon = team.icon;
              return (
                <div key={team.id} className="doodle-card group" style={{ minHeight: '280px' }}>
                  <div className="flex flex-col h-full gap-0 lg:gap-6">
                    <div className="flex-1 flex flex-col p-4 lg:p-6">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 lg:mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${team.color} rounded-xl flex items-center justify-center border-[3px] border-[#2D3648] flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#2D3648] truncate">
                              {team.title}
                            </h3>
                            <span className="px-2 py-1 bg-[#6DD5ED]/20 text-[#2D3648] rounded-full text-xs sm:text-sm font-bold border-2 border-[#2D3648]/20 whitespace-nowrap">
                              {team.role}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                            <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#2D3648]/70 min-w-0">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="font-semibold truncate">{team.hackathon}</span>
                            </div>

                            <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#2D3648]/70">
                              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="font-semibold">{team.members} members</span>
                            </div>

                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6DD5ED] rounded-full animate-pulse flex-shrink-0"></div>
                              <span className="font-semibold text-[#2D3648]/70">
                                Active · {team.lastActivity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-[#6DD5ED]/10 to-[#2193B0]/10 rounded-lg sm:rounded-xl border-2 border-[#2D3648]/10 text-center">
                          <p className="text-xs font-bold text-[#2D3648]/50 mb-1">Tasks</p>
                          <p className="text-base sm:text-lg font-bold text-[#2D3648]">8/12</p>
                        </div>

                        <div className="p-2 sm:p-3 bg-gradient-to-br from-[#FFD93D]/10 to-[#FFAA33]/10 rounded-lg sm:rounded-xl border-2 border-[#2D3648]/10 text-center">
                          <p className="text-xs font-bold text-[#2D3648]/50 mb-1">Messages</p>
                          <p className="text-base sm:text-lg font-bold text-[#2D3648]">42</p>
                        </div>

                        <div className="p-2 sm:p-3 bg-gradient-to-br from-[#FF9A62]/10 to-[#FF6B9D]/10 rounded-lg sm:rounded-xl border-2 border-[#2D3648]/10 text-center">
                          <p className="text-xs font-bold text-[#2D3648]/50 mb-1">Progress</p>
                          <p className="text-base sm:text-lg font-bold text-[#2D3648]">67%</p>
                        </div>

                        <div className="p-2 sm:p-3 bg-gradient-to-br from-[#6DD5ED]/10 to-[#2193B0]/10 rounded-lg sm:rounded-xl border-2 border-[#2D3648]/10 text-center">
                          <p className="text-xs font-bold text-[#2D3648]/50 mb-1">Days Left</p>
                          <p className="text-base sm:text-lg font-bold text-[#2D3648]">5</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-end gap-2 p-4 lg:p-6">
                      <button className="doodle-button bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white hover:from-[#5DC5DD] hover:to-[#1883A0] flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 px-4 lg:flex-1">
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-sm">View Details</span>
                      </button>

                      <button className="doodle-button bg-white text-[#2D3648] hover:bg-[#FFD93D]/20 flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 px-4 lg:flex-1">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-sm">Chat</span>
                      </button>

                      <button className="doodle-button bg-white text-[#2D3648] hover:bg-[#FF9A62]/20 flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 px-4 lg:flex-1">
                        <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-sm">Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          <Link href="/create" className="doodle-card group cursor-pointer h-20 flex items-center px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFD93D] to-[#FFAA33] rounded-xl flex items-center justify-center border-[3px] border-[#2D3648] group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#2D3648] mb-1 truncate">
                  Create New Project
                </h3>
                <p className="text-xs sm:text-sm text-[#2D3648]/70 font-semibold truncate">
                  Start a new team and find collaborators
                </p>
              </div>
            </div>
          </Link>

          <Link href="/explore" className="doodle-card group cursor-pointer h-20 flex items-center px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-xl flex items-center justify-center border-[3px] border-[#2D3648] group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#2D3648] mb-1 truncate">
                  Join More Teams
                </h3>
                <p className="text-xs sm:text-sm text-[#2D3648]/70 font-semibold truncate">
                  Explore projects looking for members
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
