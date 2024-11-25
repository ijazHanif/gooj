'use client';

import MaxWidth from '@/components/MaxWidth';
import Text from '@/components/Text';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <MaxWidth className='max-w-[67rem] flex flex-col gap-4 text-center py-16  '>
      <Text as='h2'>B2B DATA & LEAD GENERATION AGENCY</Text>
      <Text as='h1'>
        Scale Your Business With Data-Driven{' '}
        <span className='text-destructive'>
          <div className='h-16 overflow-hidden '>
            {' '}
            {/* Adjust height as needed */}
            <Typewriter
              words={[
                'Lead Generation',
                'Web Scraping',
                'Data Mining',
                'Admin Support',
                'Virtual Assistance',
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </span>
      </Text>
      <Text as='h6'>
        We combine advanced data solutions and industry expertise to deliver
        qualified leads that consistently drive business growth.
      </Text>
    </MaxWidth>
  );
};

export default Hero;
