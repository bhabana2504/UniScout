
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      className="gap-2 mb-4"
      onClick={goBack}
      size="sm"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
