
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';

const AuthButtons: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Connect to Supabase auth state

  const handleSignOut = () => {
    // TODO: Implement Supabase sign out
    setIsAuthenticated(false);
    console.log('Signing out...');
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          <User className="w-4 h-4 mr-2" />
          Profile
        </Button>
        <Button variant="ghost" size="sm" onClick={handleSignOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setAuthMode('signin');
            setAuthModalOpen(true);
          }}
        >
          Sign In
        </Button>
        <Button
          size="sm"
          onClick={() => {
            setAuthMode('signup');
            setAuthModalOpen(true);
          }}
        >
          Sign Up
        </Button>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default AuthButtons;
