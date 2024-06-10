import React from 'react'
import { motion } from 'framer-motion';

const WorkPortfolio = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-28'>
      <div>
        <p className='text-4xl font-bold'>Our <span className='text-green-500'>Work Portfolio</span></p>
      </div>

      <div className='flex flex-wrap gap-6 justify-center items-center mt-20'>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Part1.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Part2.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/participation/img7.JPG' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/participation/img62.JPG' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Manu1.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Manu2.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/events/m4.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/events/m5.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Events1.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Events2.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Events4.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
            <motion.img whileHover={{ scale: 1.1}} src='https://www.teamrevanta.in/images/Portfolio/Events5.jpg' className='h-[300px] w-[300px] border-8 border-green-500 hover:cursor-pointer hover:border-black'></motion.img>
      </div>
    </div>
  )
}

export default WorkPortfolio
