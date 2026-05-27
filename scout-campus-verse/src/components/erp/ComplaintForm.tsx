
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export function ComplaintForm() {
  const handleOpenGoogleForm = () => {
    // Open Google Form in a new window
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScQ9rn3NbRJ4_mBv9Xv9UPqqdLyL74Z-eOGBfMurHcwDQVrww/viewform', '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Submit a Complaint</h3>
        <p className="text-muted-foreground">Use our complaint form to report any issues you're facing.</p>
      </div>
      
      <Button 
        onClick={handleOpenGoogleForm}
        className="w-full sm:w-auto gap-2 animate-pulse hover:animate-none"
      >
        <Send className="h-4 w-4" />
        Open Complaint Form
      </Button>
      
      <div className="p-4 bg-muted/50 rounded-md text-sm">
        <p className="font-medium">What can I report?</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
          <li>Academic issues</li>
          <li>Infrastructure problems</li>
          <li>Faculty concerns</li>
          <li>Administrative challenges</li>
          <li>Other general complaints</li>
        </ul>
      </div>
    </div>
  );
}

export default ComplaintForm;
