import React from 'react';

const GetInTouch = () => {
  return (
    <div className='flex flex-col my-20'>
      <div className='flex justify-center items-center'>
        <p className='text-4xl font-bold text-center'>Get In <span className='text-green-500'>Touch</span></p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start my-16 px-4 lg:px-8">
        <div className="w-full lg:w-1/2 bg-blue-900 p-6 lg:p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="name">Your Name</label>
              <input className="w-full p-2 border rounded-lg" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 lg:mr-2">
                <label className="block text-white text-sm mb-2" htmlFor="phone">Phone Number</label>
                <input className="w-full p-2 border rounded-lg" type="text" id="phone" placeholder="Phone Number" />
              </div>
              <div className="w-full lg:w-1/2 lg:ml-2 mt-4 lg:mt-0">
                <label className="block text-white text-sm mb-2" htmlFor="service">Select Service</label>
                <input className="w-full p-2 border rounded-lg" type="text" id="service" placeholder="Select Service" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 border rounded-lg" type="email" id="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border rounded-lg" id="message" placeholder="Message"></textarea>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-white hover:text-green-500 transition duration-300">SEND</button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.919897235429!2d86.14515491542908!3d22.77649173143806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e35e61e1c1c1%3A0x6e4a2b9eae28e65!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1621584768486!5m2!1sen!2sin" 
            width="100%" height="475" allowFullScreen="" loading="lazy" className="rounded-lg shadow-lg">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
