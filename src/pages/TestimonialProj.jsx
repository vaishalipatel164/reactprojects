import React from 'react';
import Testimonial from '../component/testimonialsproject/Testimonial';
import { review } from '../component/testimonialsproject/Data';

function TestimonialProj() {
  return (
    <>
     <div className='flex flex-col w-screen h-screen justify-center items-center bg-gray-300'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-500 h-1 w-1/5 mt-1 mx-auto'></div>
        <Testimonial review={review}/>
      </div>
     </div>
    </>
  );
}

export default TestimonialProj;