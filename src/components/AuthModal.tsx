
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Apple, Phone, Mail, Chrome, Linkedin } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPhoneAuth, setShowPhoneAuth] = useState(false);

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase email authentication
    console.log('Email auth:', { email, password, mode });
  };

  const handlePhoneAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase phone authentication
    console.log('Phone auth:', { phone, mode });
  };

  const handleSocialAuth = (provider: string) => {
    // TODO: Implement Supabase social authentication
    console.log('Social auth:', provider);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-playfair">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Social Authentication Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 text-left justify-start gap-3"
              onClick={() => handleSocialAuth('google')}
            >
              <Chrome className="w-5 h-5" />
              Continue with Google
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12 text-left justify-start gap-3"
              onClick={() => handleSocialAuth('apple')}
            >
              <Apple className="w-5 h-5" />
              Continue with Apple
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12 text-left justify-start gap-3"
              onClick={() => handleSocialAuth('linkedin')}
            >
              <Linkedin className="w-5 h-5" />
              Continue with LinkedIn
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
              or
            </span>
          </div>

          {/* Toggle between email and phone */}
          <div className="flex gap-2">
            <Button
              variant={!showPhoneAuth ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPhoneAuth(false)}
              className="flex-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant={showPhoneAuth ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPhoneAuth(true)}
              className="flex-1"
            >
              <Phone className="w-4 h-4 mr-2" />
              Phone
            </Button>
          </div>

          {/* Email Form */}
          {!showPhoneAuth && (
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
          )}

          {/* Phone Form */}
          {showPhoneAuth && (
            <form onSubmit={handlePhoneAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Verification Code
              </Button>
            </form>
          )}

          {/* Mode Switch */}
          <div className="text-center text-sm">
            {mode === 'signin' ? (
              <span>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => onModeChange('signup')}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => onModeChange('signin')}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
