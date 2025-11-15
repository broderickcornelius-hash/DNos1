'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Compass } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f766e] via-[#0f766e]/90 to-[#0f766e]/80 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7651933/pexels-photo-7651933.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <Compass className="w-8 h-8 text-[#0f766e]" />
            <span className="text-2xl font-bold font-poppins text-[#0f766e]">
              NomadGate
            </span>
          </Link>

          <h1 className="text-4xl font-bold text-[#0f766e] text-center mb-10 font-poppins">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base font-medium text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-[#0f766e] focus:ring-[#0f766e]"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-[#0f766e] focus:ring-[#0f766e]"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-base font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-[#0f766e] focus:ring-[#0f766e]"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-8"
            >
              Signup
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#0f766e] font-semibold hover:text-[#0d6561] transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
