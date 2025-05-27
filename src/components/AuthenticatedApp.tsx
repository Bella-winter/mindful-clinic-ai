
import React from 'react';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { useAuth } from '@/hooks/useAuth';

export function AuthenticatedApp() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  // Get user data from the authenticated user
  const userData = {
    email: user.email || '',
    role: user.user_metadata?.role || 'patient',
    name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl">
          <Dashboard user={userData} />
        </div>
      </main>
    </div>
  );
}
