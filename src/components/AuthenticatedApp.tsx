
import React from 'react';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { useAuth } from '@/hooks/useAuth';

export function AuthenticatedApp() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-medical-blue/5 to-medical-teal/5 px-4">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-center sm:text-left">
          <div className="w-8 h-8 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
          <span className="text-medical-blue font-medium text-sm sm:text-base">Loading CareConnect...</span>
        </div>
      </div>
    );
  }

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
