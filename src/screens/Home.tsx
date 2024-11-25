import MaxWidth from '@/components/MaxWidth';
import ReusableCard from '@/components/ReusableCard';
import Hero from '@/widgets/home/Hero';
import React from 'react';
import t from '../../messages/en.json';
import { GoArrowUpRight } from "react-icons/go";


const Home: React.FC = () => {
  // services_section
  const title = t.services_home.title;
  const description = t.services_home.description;
  const services = t.services_home.services;

  return (
    <>
      {/* hero_section */}
      <section>
        <Hero />
      </section>
      {/* services_section */}
      <section className='bg-input'>
        <MaxWidth className='py-8'>
          <ReusableCard
            title={title}
            description={description}
            cardData={services}
            layoutGridClassName='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
            buttonIcon={<GoArrowUpRight />} 
          />
        </MaxWidth>
      </section>
    </>
  );
};

Home.displayName = 'Home';
export default Home;
