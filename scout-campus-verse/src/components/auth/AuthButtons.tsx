
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" asChild className="flex items-center gap-2">
        <Link to="/login?tab=login">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </Link>
      </Button>
      
      <Button asChild className="flex items-center gap-2">
        <Link to="/login?tab=signup">
          <UserPlus className="h-4 w-4" />
          <span>Sign Up</span>
        </Link>
      </Button>
    </div>
  );
}

export default AuthButtons;
