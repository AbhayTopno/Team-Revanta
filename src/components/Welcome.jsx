import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-end gap-8 md:gap-24 my-10 md:my-20 px-4'>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="m-4 md:m-[50px] content h-auto md:h-[540px] w-full md:w-[410px] flex flex-col justify-center items-center"
      >
        <h1 className='text-2xl md:text-3xl font-bold flex gap-2 text-center md:text-left'>Welcome to <span className='text-green-500'>Team Revanta</span></h1>
        <p className='my-4 md:my-10 text-center md:text-left'>Team Revanta is the official technical team of NIT Jamshedpur which design solar electric vehicles.
        We aim for designing a highly efficient mileage hybrid solar electric vehicle with minimal carbon footprint. Revanta Supermileage was started in the year 2009 as a result of the dream of a group of students who wanted to break the barriers of mileage. The team is being guided by Dr. KDP Singh (Mech. Dept) and Dr. Madhu Singh (Elect. Dept).<br/>
        Switching from gasoline vehicles to electric vehicles in 2014. Just after the break of approx. 2 years which corona pandemic imposed on us, we shifted to four wheels.
        </p>
        <button className='bg-green-500 w-28 h-12 md:w-36 md:h-14 left-0 hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-[1px] transition-all duration-300 ease-in rounded-md'>Read More</button>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: +500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center">
        <img src='https://www.teamrevanta.in/images/car/Screenshot%20(137).png' className='h-[300px] md:h-[650px] w-auto'></img>
      </motion.div>
    </div>
  );
}

export default Welcome;
