
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthForm } from '@/components/AuthForm';
import { AuthenticatedApp } from '@/components/AuthenticatedApp';
import { AuthProvider, useAuth } from '@/hooks/useAuth';

function AppContent() {
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

  return (
    <div className="min-h-screen bg-background w-full">
      {!user ? <AuthForm /> : <AuthenticatedApp />}
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="careconnect-theme">
      <AuthProvider>
        <div className="w-full min-h-screen">
          <AppContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Index;
