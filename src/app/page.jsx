import Hero from '@/components/sections/Hero';
import PetSpecies from '@/components/sections/PetSpecies';
import TopFooter from '@/components/sections/TopFooter';
import WhyAdopt from '@/components/sections/WhyAdopt';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
        <main>
          <Hero />
          <WhyAdopt />
          <PetSpecies />
          <TopFooter />
        </main>
    </div>
  );
};

export default Home;

