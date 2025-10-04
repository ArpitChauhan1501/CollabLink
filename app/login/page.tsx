'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Users, Lock, User, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(username, password)) {
      router.push('/home');
    } else {
      setError('Invalid credentials. Use admin/admin to login.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative bg-white">
      {/* Minimal blobs - positioned safer */}
      <div className="absolute top-2 left-2 w-12 h-12 bg-[#FFD93D] rounded-full opacity-10 blur-md"></div>
      <div className="absolute bottom-2 right-2 w-16 h-16 bg-[#FF9A62] rounded-full opacity-10 blur-md"></div>
      <div className="absolute top-20 right-5 w-12 h-12 bg-[#6DD5ED] rounded-full opacity-10 blur-md hidden lg:block"></div>

      {/* Sparkles only on larger screens */}
      <div className="absolute top-10 right-20 float-animation hidden lg:block">
        <Sparkles className="w-5 h-5 text-[#FFD93D]" />
      </div>
      <div className="absolute bottom-20 left-10 float-animation hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-4 h-4 text-[#FF9A62]" />
      </div>

      <div className="w-full max-w-md lg:max-w-4xl xl:max-w-5xl relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12">
        {/* Welcome section - right on mobile (below), left on lg */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 px-2 lg:px-0">
          <div className="inline-block relative mb-2 lg:mb-4 mx-auto lg:mx-0">
            <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-xl xl:rounded-2xl flex items-center justify-center border lg:border-2 border-[#2D3648] shadow-md lg:shadow-lg transform -rotate-3 bounce-hover">
              <Users className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#FFD93D] rounded-full border lg:border-2 border-[#2D3648]"></div>
          </div>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#2D3648] mb-1 lg:mb-2 leading-tight">
            Welcome to <span className="squiggle-underline">CollabLink</span>
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-[#2D3648]/70 font-semibold px-2 lg:px-0">
            Find your perfect hackathon teammates
          </p>
        </div>

        {/* Form section - left on mobile (top), right on lg */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 px-2 lg:px-0">
          <div className="doodle-card p-4 lg:p-6 max-w-full">
            {/* Compact demo */}
            <div className="mb-4 p-3 lg:p-4 bg-gradient-to-r from-[#6DD5ED]/10 to-[#FFD93D]/10 rounded-lg border border-dashed border-[#2D3648]/20">
              <div className="flex items-start space-x-2 lg:space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#6DD5ED] rounded-full flex items-center justify-center flex-shrink-0 border border-[#2D3648] mt-1">
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs lg:text-sm text-[#2D3648] font-semibold leading-tight">
                    Demo login credentials:
                    <br />
                    <span className="text-[#FF9A62]">Username: admin</span>
                    <br />
                    <span className="text-[#FF9A62]">Password: admin</span>
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
              <div>
                <label className="block text-xs lg:text-sm font-bold text-[#2D3648] mb-1 flex items-center justify-center lg:justify-start">
                  <User className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                  <span className="min-w-0 truncate">Username</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="doodle-input h-10 lg:h-12 text-sm lg:text-base w-full border-[2px] border-[#2D3648] rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF9A62] focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm font-bold text-[#2D3648] mb-1 flex items-center justify-center lg:justify-start">
                  <Lock className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                  <span className="min-w-0 truncate">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="doodle-input h-10 lg:h-12 text-sm lg:text-base w-full border-[2px] border-[#2D3648] rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF9A62] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <div className="p-2 lg:p-3 bg-[#FF9A62]/10 border-[2px] border-[#FF9A62] rounded-2xl">
                  <p className="text-xs lg:text-sm text-[#2D3648] font-semibold text-center">
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 lg:py-3 px-4 doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white hover:from-[#FF8A52] hover:to-[#FF5B8D] text-sm lg:text-base font-bold rounded-2xl border-[2px] border-[#2D3648] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 group"
              >
                <span className="relative z-10">Log In</span>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <Link
                href="/useraccount"
                className="block w-full py-2 lg:py-3 px-4 doodle-button bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white hover:from-[#5CC4DC] hover:to-[#1A8299] text-sm lg:text-base font-bold rounded-2xl border-[2px] border-[#2D3648] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 group"
              >
                <span className="relative z-10">Create User Account</span>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </form>
          </div>

          {/* Secure login footer below form */}
          <div className="mt-4 lg:mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 lg:space-x-3 text-[#2D3648]/60 text-xs lg:text-sm">
              <svg
                className="w-10 lg:w-12 h-2 lg:h-3 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
              <span className="font-semibold whitespace-nowrap">Secure Login</span>
              <svg
                className="w-10 lg:w-12 h-2 lg:h-3 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}