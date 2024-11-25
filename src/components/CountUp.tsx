'use client'
import React from 'react'
import CountUp from 'react-countup';

const Statistics: React.FC = () => {
  return (
    <div className='my-20'>
      <h1 className="text-red-500 font-bold text-xl"> III. Statistics Section (Following template's number animation style) </h1>
      <div>
        {/* <p>10. <CountUp start={0} end={3000} duration={3} />+ Projects Completed</p>
        <p>11. <CountUp start={0} end={1000000} prefix="$" separator="," duration={3} /> Revenue Generated</p>
        <p>12. <CountUp start={0} end={4.9} decimals={1} suffix="/5" duration={3} /> Client Satisfaction</p>
        <p>13. <CountUp start={0} end={98} suffix="%" duration={3} /> on-time Delivery</p>
        <div>
          SYNDICODE BY THE NUMBERS
        </div> */}
        
        <div className='flex my-10 gap-10'>
          <div>
            <h1>
              <CountUp start={0} end={2014} duration={3} />
            </h1>
            <p>Year of foundation</p>
          </div>
          <div>
            <h1>
              <CountUp start={0} end={400} prefix="$" suffix="M+" duration={3} />
            </h1>
            <p>Investment raised by Clients</p>
          </div>
          <div>
            <h1>
              <CountUp start={0} end={140} prefix="$" suffix="M+" duration={3} />
            </h1>
            <p>Successfully delivered projects</p>
          </div>
          <div>
            <h1>
              <CountUp start={0} end={58} duration={3} />
            </h1>
            <p>In-house engineers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
