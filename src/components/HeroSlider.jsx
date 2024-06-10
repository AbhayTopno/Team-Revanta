import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  {
    url: 'https://i.ibb.co/RTQpx6k/Revanta-group.jpg',
    caption: 'Revanta Family'
  },
  {
    url: 'https://i.ibb.co/Cm0DYpw/Sen.jpg',
    caption: 'Batch 2K20 & 2K21'
  },
  {
    url: 'https://i.ibb.co/W2Z0RQ4/Elec.jpg',
    caption: 'Electrical'
  },
  {
    url: 'https://i.ibb.co/27p81Qz/mech.jpg',
    caption: 'Mechanical'
  },
  {
    url: 'https://i.ibb.co/Wc145wp/Pie.jpg',
    caption: 'PIE & ECM'
  },
  {
    url: 'https://i.ibb.co/hKTrTDX/female.jpg',
    caption: 'Revanta Girls'
  },
];

const HeroSlider = () => {
  return (
    <div className="slide-container relative mt-20 mb-16 md:mt-40 md:mb-28">
      <Fade 
        duration={5000} 
        infinite={true}
        indicators={true}
        arrows={true} 
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="relative">
            <img className="h-[300px] md:h-[570px] w-full object-cover" src={fadeImage.url} alt={fadeImage.caption} />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 md:py-4">
              <h2 className="text-lg md:text-xl font-bold">{fadeImage.caption}</h2>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default HeroSlider;
