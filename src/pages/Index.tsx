
import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthForm } from '@/components/AuthForm';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';

const Index = () => {
  const [user, setUser] = useState<{ email: string; role: string; name: string } | null>(null);

  const handleAuthSuccess = (userData: { email: string; role: string; name: string }) => {
    setUser(userData);
    console.log('User authenticated:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    console.log('User logged out');
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="careconnect-theme">
      <div className="min-h-screen bg-background">
        {!user ? (
          <AuthForm onAuthSuccess={handleAuthSuccess} />
        ) : (
          <>
            <Header />
            <main className="container mx-auto px-4 py-6">
              <Dashboard user={user} />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
