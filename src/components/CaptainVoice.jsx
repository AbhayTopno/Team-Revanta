import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    img: "https://www.teamrevanta.in/images/abhisek.jpeg",
    name: "Abhishek Kumar",
    year: "2K19",
    text: "Working with a team always comes with numerous challenges. Successfully steering through them helps you grow in every dimension. One should see these challenges as opportunities for self-development, and being a part of a team like Team Revanta has been a comprehensive package of development for me."
  },
  {
    img: "https://www.teamrevanta.in/images/rajat.jpeg",
    name: "Rajat Raj",
    year: "2K20",
    text: "Steering Revanta taught me: leadership ain't solo. It's trust, passion, shared laughter. These grease-stained geniuses, my sun-powered family. We weathered every storm, every deadline, with laughter and trust. Built more than an EV, a legacy of sunshine and grit. Keep chasing the horizon, Revanta!"
  },
  {
    img: "https://www.teamrevanta.in/images/members2k21/Priyanshu.jpg",
    name: "Priyanshu Raj",
    year: "2K21",
    text: "Team Revanta's work culture is a symphony of collaboration and expertise. Within our technical pursuits, we foster an environment where every member's contribution is valued and respected. As the team captain, steering this collective effort has been a privilege. Witnessing the fusion of diverse talents and the unwavering dedication to achieving our goals has been an immensely fulfilling experience."
  }
];

const CaptainVoice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false
  };

  return (
    <div className='flex flex-col justify-center items-center mb-20 md:mb-40'>
      <div className='mb-10'>
        <p className='text-2xl md:text-4xl font-bold text-center'>Captain's <span className='text-green-500'>Voice</span></p>
      </div>

      <Slider {...settings} className="w-full max-w-lg">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center md:flex-row md:items-center justify-center">
            <div className="flex flex-col items-center">
              <img src={slide.img} alt={slide.name} className="h-40 w-40 md:h-64 md:w-64 border-8 border-green-500 rounded-full object-cover" />
              <h2 className="mt-4 text-lg md:text-xl font-semibold">{slide.name}</h2>
              <p className="mt-1 text-gray-600">{slide.year}</p>
            </div>
            <div className="w-11/12 md:w-[450px] mt-8 md:mt-0 md:ml-8 border border-black p-4 flex justify-center items-center">
              <p className="text-center text-sm md:text-base">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CaptainVoice;
