import React from 'react';

const SponsorUs = () => {
  return (
    <div className='mx-4 md:mx-8'>
      <div className='flex flex-col justify-center items-center my-8 text-xl md:text-3xl'>
        <p className='my-4 md:my-8 font-bold'>Sponsor <span className='text-green-500'>Us</span></p>
        <p className='text-center'>"Contribute towards a greener India and play your role in bringing it to forefront in the solar race."</p>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 my-12 md:my-36'>
        <div className='h-[512px] w-full md:w-[370px] flex flex-col justify-center items-center bg-[#b8c8ff] rounded-xl py-4 px-4'>
          <img src="https://www.teamrevanta.in/images/sponsor/pngwing.com%20(32).png" className='h-[80px] mb-4' alt="Principal Partners" />
          <p className='my-2 text-lg md:text-2xl font-bold'>Principal Partners</p>
          <p className='mb-4 text-lg md:text-2xl font-bold text-center'>INR 41,000 And Above</p>
          <ul className='px-4 md:px-10 list-disc text-sm md:text-base'>
            <li>Large size logo on the team website, banners, and posters.</li>
            <li>Preferred position for a large size logo on a team car.</li>
            <li>Special acknowledgment in media and press releases.</li>
            <li>Special mention and promotion in events and public gatherings where the car is on display.</li>
          </ul>
          <button className='mt-auto mb-4 bg-black text-[#B59410] w-28 md:w-36 h-10 md:h-12 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border-black hover:border-2'>Know More</button>
        </div>

        <div className='h-[512px] w-full md:w-[370px] flex flex-col justify-center items-center bg-[#b8c8ff] rounded-xl py-4 px-4'>
          <img src="https://www.teamrevanta.in/images/sponsor/pngwing.com%20(31).png" className='h-[80px] mb-4' alt="Gold Partners" />
          <p className='my-2 text-lg md:text-2xl font-bold'>Gold Partners</p>
          <p className='mb-4 text-lg md:text-2xl font-bold text-center'>INR 21,000 - 40,000</p>
          <ul className='px-4 md:px-10 list-disc text-sm md:text-base'>
            <li>Large size logo on the team website, banners, and posters.</li>
            <li>Preferred position for a logo on a team car.</li>
            <li>Acknowledgment in media and press releases.</li>
            <li>Mention and promotion in events and public gatherings where the car is on display.</li>
          </ul>
          <button className='mt-auto mb-4 bg-black text-[#FFD700] w-28 md:w-36 h-10 md:h-12 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border-black hover:border-2'>Know More</button>
        </div>

        <div className='h-[512px] w-full md:w-[370px] flex flex-col justify-center items-center bg-[#b8c8ff] rounded-xl py-4 px-4'>
          <img src="https://www.teamrevanta.in/images/sponsor/pngwing.com%20(29).png" className='h-[80px] mb-4' alt="Silver Partners" />
          <p className='my-2 text-lg md:text-2xl font-bold'>Silver Partners</p>
          <p className='mb-4 text-lg md:text-2xl font-bold text-center'>INR 11,000 - 20,000</p>
          <ul className='px-4 md:px-10 list-disc text-sm md:text-base'>
            <li>Medium size logo on the team website, banners, and posters.</li>
            <li>Position for a logo on a team car.</li>
          </ul>
          <button className='mt-auto mb-4 bg-black text-[#D3D3D3] w-28 md:w-36 h-10 md:h-12 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border-black hover:border-2'>Know More</button>
        </div>

        <div className='h-[512px] w-full md:w-[370px] flex flex-col justify-center items-center bg-[#b8c8ff] rounded-xl py-4 px-4'>
          <img src="https://www.teamrevanta.in/images/sponsor/pngwing.com%20(30).png" className='h-[80px] mb-4' alt="Bronze Partners" />
          <p className='my-2 text-lg md:text-2xl font-bold'>Bronze Partners</p>
          <p className='mb-4 text-lg md:text-2xl font-bold text-center'>Below INR 11,000</p>
          <ul className='px-4 md:px-10 list-disc text-sm md:text-base'>
            <li>Small size logo on the team website and banners.</li>
            <li>Position for a small size logo on a team car.</li>
          </ul>
          <button className='mt-auto mb-4 bg-black text-[#CD7F32] w-28 md:w-36 h-10 md:h-12 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border-black hover:border-2'>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default SponsorUs;
