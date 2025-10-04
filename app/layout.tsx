// filename: layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CollabLink - Find Your Hackathon Team',
  description: 'Connect with teammates for your next hackathon adventure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}