
import React from 'react';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import Benefits from '@/components/home/Benefits';
import Promises from '@/components/home/Promises';
import Team from '@/components/home/Team';


const Index = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Benefits />
      <Promises />
      <Team />
    </div>
  );
};

export default Index;
