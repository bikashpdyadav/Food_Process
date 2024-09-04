import React from 'react';
import NavigateCard from './NavigateCard';

const HeroSection = () => {
  return (
    <div className="relative h-auto py-24 bg-cover bg-center bg-green-300 flex items-center justify-center" style={{ backgroundImage: "url('')" }}>
      <div className="z-20 w-full flex items-center justify-center max-w-md">
        <NavigateCard
          title="UPLOAD"
          description="This is a centered card in the hero section."
          buttontxt="UPLOAD NOW"
          url=""
          navigator="/"
        />
      </div>
    </div>
  );
};

export default HeroSection;
