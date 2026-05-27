
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedIntro() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-500 to-uscout-purple-light">
      <div className={cn(
        "flex flex-col items-center justify-center",
        "animate-fade-in transition-all duration-300"
      )}>
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/9fae2876-fd54-4014-9acc-c179ae892829.png" 
              alt="Uni Scout" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-wider animate-scale-in">
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.1s' }}>U</span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.2s' }}>n</span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.3s' }}>i</span>
          <span className="inline-block mr-3 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.5s' }}>S</span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.6s' }}>c</span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.7s' }}>o</span>
          <span className="inline-block mr-2 animate-bounce" style={{ animationDelay: '0.8s' }}>u</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>t</span>
        </h1>
      </div>
    </div>
  );
}
