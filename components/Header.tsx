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

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${pathname === link.href ? 'bg-[#FF9A62] text-white' : 'text-[#2D3648] hover:bg-[#FFD93D]/30'}`}>
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white font-semibold border-2 border-[#2D3648] shadow-sm">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#2D3648] font-bold text-xs">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm max-w-[80px] truncate">{user.username}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border-2 border-[#2D3648] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link href="/profile" className="block px-4 py-2 text-[#2D3648] hover:bg-[#FFD93D]/20 rounded-t-lg font-semibold">Profile</Link>
                  <button onClick={logout} className="w-full text-left px-4 py-2 text-[#2D3648] hover:bg-[#FF9A62]/20 rounded-b-lg font-semibold">Logout</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/signin" className="px-4 py-2 rounded-full font-semibold text-[#2D3648] hover:bg-[#FFD93D]/30 text-sm">Sign In</Link>
                <Link href="/login" className="px-4 py-2 rounded-full font-semibold bg-[#FF9A62] text-white border-2 border-[#2D3648] text-sm">Login</Link>
              </div>
            )}
          </nav>

          <button
            className="md:hidden p-2 text-[#2D3648]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === link.href ? 'bg-[#FF9A62]/10 border-[#FF9A62] text-[#2D3648]' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`}>
                  {link.label}
                </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] rounded-full flex items-center justify-center border-2 border-[#2D3648]">
                        <span className="text-white font-bold">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.username}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Profile</Link>
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Logout</button>
                </div>
            ) : (
                <div className="space-y-1">
                  <Link href="/signin" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign In</Link>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Login</Link>
                </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
