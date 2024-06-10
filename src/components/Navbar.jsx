import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='bg-green-500 bg-opacity-90 fixed top-0 w-full z-10'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14'>
          <div className='flex-shrink-0'>
            <a href="#" className='text-xl text-white font-bold'>LOGO</a>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-10'>
            <motion.ul className='flex gap-10 text-xl'>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>HOME</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>ACHIEVEMENTS</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>GALLERY</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>CONTACT US</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>OUR TEAM</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>SPONSOR US</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>RESULT</motion.li>
            </motion.ul>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              {isOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className='md:hidden'
        >
          <motion.ul className='flex flex-col gap-4 text-xl p-4'>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>HOME</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>ACHIEVEMENTS</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>GALLERY</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>CONTACT US</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>OUR TEAM</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>SPONSOR US</motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='hover:text-white hover:cursor-pointer'>RESULT</motion.li>
          </motion.ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
