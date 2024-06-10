import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className='bg-[#252525] text-white flex flex-col py-12 px-6 lg:px-32'>
        <div className='mb-10 text-center lg:text-left'>
          <p className='text-4xl font-bold'>Team <span className='text-green-500'>Revanta</span></p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-10 mb-10'>
          <div className='w-full lg:w-[200px]'>
            <p className='text-xl font-bold'>USEFUL LINKS</p>
            <div className='text-[#878585] mt-4'>
              <p className='hover:font-bold hover:cursor-pointer'>Home</p>
              <p className='hover:font-bold hover:cursor-pointer'>Team</p>
              <p className='hover:font-bold hover:cursor-pointer'>Achievements</p>
              <p className='hover:font-bold hover:cursor-pointer'>Gallery</p>
              <p className='hover:font-bold hover:cursor-pointer'>Contact Us</p>
            </div>
          </div>

          <div className='w-full lg:w-[280px]'>
            <p className='font-bold text-xl'>MANUFACTURING</p>
            <p className='text-[#878585] mt-4'>Sokhi Enterprise Pvt Ltd sponsor us to do fabrication works.</p>
          </div>

          <div className='w-full lg:w-[280px] flex flex-col'>
            <p className='font-bold text-xl'>SOCIAL MEDIA</p>
            <div className='flex gap-3 items-center mt-4'>
              <div className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full hover:bg-white hover:text-green-500 transition-all duration-300 ease-in hover:cursor-pointer">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full hover:bg-white hover:text-green-500 transition-all duration-300 ease-in hover:cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full hover:bg-white hover:text-green-500 transition-all duration-300 ease-in hover:cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[280px]'>
            <p className='font-bold text-xl'>NIT JAMSHEDPUR</p>
            <p className='text-[#878585] mt-4'>NIT Jamshedpur is an Institute of National Importance for Technical Education located at Jamshedpur, Jharkhand, India and is directly under the control of the Ministry of Education (MHRD).</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 text-lg'>
          <div className='flex justify-center items-center gap-3'>
            <div className="hover:text-green-500 hover:cursor-pointer">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p>NIT Jamshedpur</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <div className="hover:text-green-500 hover:cursor-pointer">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>Call +91 9155360718</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <div className="hover:text-green-500 hover:cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>revanta@nitjsr.ac.in</p>
          </div>
        </div>
      </div>

      <div className='bg-black text-white text-center text-xl flex items-center justify-center h-16'>
        © All Rights Reserved By Team Revanta, Nit Jamshedpur
      </div>
    </div>
  );
}

export default Footer;
