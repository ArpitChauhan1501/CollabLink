'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Star } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className="relative mt-20 border-t-[3px] border-[#2D3648] bg-white/60 backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9A62] via-[#FFD93D] to-[#6DD5ED]"></div>

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          <Star className="w-6 h-6 text-[#FFD93D] fill-[#FFD93D] transform rotate-12 float-animation" />
          <Star className="w-5 h-5 text-[#FF9A62] fill-[#FF9A62] transform -rotate-6 float-animation" style={{ animationDelay: '0.5s' }} />
          <Star className="w-7 h-7 text-[#6DD5ED] fill-[#6DD5ED] transform rotate-45 float-animation" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-[#2D3648] mb-4 flex items-center">
              <span className="squiggle-underline">About CollabLink</span>
            </h3>
            <p className="text-[#2D3648]/70 text-sm leading-relaxed">
              Find your perfect hackathon teammates and bring your ideas to life together!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#2D3648] mb-4 flex items-center">
              <span className="squiggle-underline">Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/explore', label: 'Explore Teams' },
                { href: '/create', label: 'Create Project' },
                { href: '/my-teams', label: 'My Teams' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#2D3648]/70 hover:text-[#FF9A62] transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#2D3648] mb-4 flex items-center">
              <span className="squiggle-underline">Support</span>
            </h3>
            <ul className="space-y-2">
              {[
                { href: '#', label: 'FAQs' },
                { href: '#', label: 'Contact Us' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms of Service' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#2D3648]/70 hover:text-[#FF9A62] transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-dashed border-[#2D3648]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#2D3648]/60 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-[#FF6B9D] fill-[#FF6B9D]" /> for hackathon enthusiasts
            </p>
            <p className="text-[#2D3648]/60 text-sm">
              © 2025 CollabLink. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-6 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 20"
      >
        <path
          d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10 T500,10 T600,10 T700,10 T800,10 T900,10 T1000,10 T1100,10 T1200,10"
          stroke="#2D3648"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </footer>
  );
}
