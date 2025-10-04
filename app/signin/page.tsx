'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Mail, Sparkles } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    console.log('Signing in with:', { email, password });
    // On successful sign-in, redirect to home
    router.push('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#2D3648] mb-2">Sign In to CollabLink</h1>
            <p className="text-md text-[#2D3648]/70 font-semibold">Welcome back! Please enter your details.</p>
        </div>
        <div className="doodle-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#2D3648] mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="doodle-input w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#2D3648] mb-2 flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="doodle-input w-full"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && (
              <div className="p-3 bg-red-100 border-2 border-red-400 rounded-xl">
                <p className="text-sm text-red-700 font-semibold text-center">{error}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 px-4 doodle-button bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white font-bold"
            >
              Sign In
            </button>
            <p className="text-center text-sm text-[#2D3648]/80">
              Don't have an account?{' '}
              <Link href="/useraccount" className="font-bold text-[#FF9A62] hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
