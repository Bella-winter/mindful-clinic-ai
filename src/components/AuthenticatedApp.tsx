
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
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Dashboard user={userData} />
      </main>
    </>
  );
}
