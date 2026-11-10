import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function TestimonialCard({review}) {
  return (
    <>
    <div className='flex flex-col md:relative '>
        <div className='absolute -top-28 z-10 mx-auto]'>
            <img className='aspect-square rounded-full w-35 h-35 z-25' src={review.image} alt="image" />
            <div className='w-35 h-35 bg-violet-600 rounded-full absolute -top-1.5 -z-10 left-2.5'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
            <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-center mx-auto mt-5 text-violet-500'>
            <FaQuoteLeft />
        </div>

        <div className='text-center mt-4 text-slate-600'>
            {review.text}
        </div>
        <div className='text-center mx-auto mt-5 text-violet-500'>
            <FaQuoteRight />
        </div>

    </div>
    </>
  );
}

export default TestimonialCard;