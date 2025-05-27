
import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      setMobileMenuOpen(false);
      toast({
        title: 'Logged out successfully',
        description: 'You have been securely logged out of CareConnect',
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: 'Error',
        description: 'Failed to log out. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const getUserDisplayName = () => {
    if (!user) return 'User';
    return user.user_metadata?.full_name || 
           user.email?.split('@')[0] || 
           'User';
  };

  const HeaderActions = ({ isMobile = false }) => (
    <div className={`flex items-center ${isMobile ? 'flex-col space-y-3 w-full' : 'space-x-2'}`}>
      <div className={`flex items-center ${isMobile ? 'justify-center w-full' : 'space-x-2'}`}>
        <ThemeToggle />
        {!isMobile && (
          <>
            <Button variant="ghost" size="sm" className="hover:bg-medical-blue/10">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-medical-blue/10">
              <Settings className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      
      {isMobile && (
        <div className="flex flex-col space-y-2 w-full">
          <Button variant="ghost" className="justify-start hover:bg-medical-blue/10 w-full">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="ghost" className="justify-start hover:bg-medical-blue/10 w-full">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      )}
      
      <div className={`flex items-center ${isMobile ? 'justify-center space-y-2 flex-col w-full' : 'space-x-2'}`}>
        <Button 
          variant="ghost" 
          size={isMobile ? "default" : "sm"} 
          className={`hover:bg-medical-blue/10 ${isMobile ? 'w-full justify-start' : ''}`}
        >
          <User className="h-4 w-4 mr-1" />
          <span className="text-xs sm:text-sm">
            {getUserDisplayName()}
          </span>
        </Button>
        <Button 
          variant="ghost" 
          size={isMobile ? "default" : "sm"} 
          className={`hover:bg-destructive/10 text-destructive hover:text-destructive ${isMobile ? 'w-full justify-start' : ''}`}
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-1" />
          {isMobile && <span>Sign Out</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-medical-blue to-medical-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">C</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              CareConnect
            </h1>
          </div>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex">
          <HeaderActions />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-medical-blue/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-8 h-8 bg-gradient-to-br from-medical-blue to-medical-teal rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                    CareConnect
                  </h2>
                </div>
                <HeaderActions isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
