import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className='mb-20'>
      <div className='text-center pb-16'>
        <p className='text-4xl'>Our <span className='text-green-500'>Achievements</span></p>
      </div>
      <div ref={ref} className='flex flex-wrap gap-5 justify-center items-center'>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
          <img src='https://www.teamrevanta.in/images/s1.png' className='' alt="Achievement 1"></img>
          <p className='my-6 text-xl font-bold' >SAE SUPERMILEAGE, USA</p>
          <p>Our team participated in SAE Supermileage 2010 held in Michigan, USA. Through collaborative efforts, innovation, and dedication, we have secured the overall 3rd position. Team Revanta’s success at SAE brings unparalleled glory and pride to our Institute NIT Jamshedpur.</p>
        </motion.div>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
          <img src='https://www.teamrevanta.in/images/s2.png' className=''></img>
                  <p className='my-6 text-xl font-bold' >Shell Eco Marathon, Malaysia</p>
                  <p>Team Revanta proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.</p>
        </motion.div>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
          <img src='https://www.teamrevanta.in/images/s3.png' className=''></img>
                  <p className='my-6 text-xl font-bold' >ESVC'21</p>
                  <p>In 2021, Team Revanta in Electric Solar Vehicle Championship secured 5th in design and 7th in Virtuals. United as a team, we faced challenges, emerged stronger, and remain committed to pushing the boundaries of sustainable technology, led by the visionary Abhisekh Kumar(PIE).</p>
        </motion.div>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
          <img src='https://www.teamrevanta.in/images/s4.png' className=''></img>
                  <p className='my-6 text-xl font-bold' >ESVC'23</p>
                  <p>In 2023, Revanta in Electric Solar Vehicle Championship secured 1st in Business plan, 3rd in Cost and Manufacturing. Cheers to countless victories ahead, as we look forward to pioneering innovations in the field of electric vehicles, led by the dynamic leadership of Rajat Raj(ME).</p>
        </motion.div>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
                           <img src='https://www.teamrevanta.in/images/s5.png' className=''></img>
                  <p className='my-6 text-xl font-bold' >SAE SUPERMILEAGE, USA</p>
                  <p>The team participated in the Electric Solar Vehicle Championship-2014 led by Gaurav Singh (MME) and came out with flying colours, securing the fourth rank in the virtuals and an over all remarkable performance in the dynamic event.</p>
        </motion.div>
        <motion.div className="h-[510px] w-[375px] flex flex-col justify-center items-center border-[3px] rounded-xl p-8 hover:bg-green-500 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}>
          <img src='https://www.teamrevanta.in/images/s6.png' className=''></img>
                   <p className='my-6 text-xl font-bold' >SAE SUPERMILEAGE, USA</p>
                   <p>Currently the team is engaged in doing research to improve the mileage and efficiency of Electric-Solar Vehicle. The team is also looking forward to make an ultra-light cost,effective hybrid vehicle. The team switched into the Electric Solar Hybrid Category.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
