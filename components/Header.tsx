'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname === '/login') {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Teams' },
    { href: '/create', label: 'Create Project' },
    { href: '/my-teams', label: 'My Teams' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-[3px] border-[#2D3648] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 bounce-hover">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A62] to-[#FF6B9D] rounded-2xl flex items-center justify-center border-[3px] border-[#2D3648] transform rotate-3 shadow-md">
                <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD93D] rounded-full border-2 border-[#2D3648]"></div>
            </div>
            <span className="text-2xl font-bold text-[#2D3648] tracking-tight">
              CollabLink
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-[#FF9A62] text-white border-[3px] border-[#2D3648] shadow-md'
                    : 'text-[#2D3648] hover:bg-[#FFD93D]/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white font-semibold border-[3px] border-[#2D3648] shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#2D3648]">
                    <span className="text-[#2D3648] font-bold text-sm">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="max-w-[100px] truncate">{user.username}</span>
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border-[3px] border-[#2D3648] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/profile"
                    className="block px-4 py-3 text-[#2D3648] hover:bg-[#FFD93D]/20 rounded-t-xl transition-colors font-semibold"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-[#2D3648] hover:bg-[#FF9A62]/20 rounded-b-xl transition-colors font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2 text-[#2D3648]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl font-semibold transition-all ${
                  pathname === link.href
                    ? 'bg-[#FF9A62] text-white border-[3px] border-[#2D3648]'
                    : 'text-[#2D3648] hover:bg-[#FFD93D]/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <>
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-[#2D3648] hover:bg-[#6DD5ED]/20 font-semibold"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-2xl text-[#2D3648] hover:bg-[#FF9A62]/20 font-semibold"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
