
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-playfair font-bold text-gradient mb-2">Portfolio</div>
            <p className="text-sm text-muted-foreground">
              © 2024 Creative Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Deployed on Vercel • Optimized for performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
