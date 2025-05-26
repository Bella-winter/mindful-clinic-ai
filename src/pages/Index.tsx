
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthForm } from '@/components/AuthForm';
import { AuthenticatedApp } from '@/components/AuthenticatedApp';
import { AuthProvider, useAuth } from '@/hooks/useAuth';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-medical-blue/5 to-medical-teal/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
          <span className="text-medical-blue font-medium">Loading CareConnect...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {!user ? <AuthForm /> : <AuthenticatedApp />}
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="careconnect-theme">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Index;
