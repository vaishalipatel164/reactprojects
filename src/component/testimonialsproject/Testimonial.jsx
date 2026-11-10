import {react, useState} from "react";
import TestimonialCard from "./TestimonialCard";
import {FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonial({review}) {
     const [index, setIndex] = useState (0);
    function leftSHiftHandler() {
        if(index - 1 < 0) {
            setIndex(review.length - 1);
        }
        else{
            setIndex (index - 1);
        }
    }
       function rightShiftHandler() {
        if(index + 1 >= review.length) {
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }
       function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * review.length);
        setIndex(randomIndex);
    }

    return(
        <>
        <div className="w-[85vw] md:w-175 bg-white flex flex-col justify-center 
        items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <TestimonialCard review={review[index]} />

             <div className='flex text-3xl mt-5 gap-3 text-violet-500 font-bold text-center mx-auto'>
                        <button onClick={leftSHiftHandler}
                        className='cursor-pointer hover:text-violet-600'>
                            <FiChevronLeft />
                        </button>
                        <button onClick={rightShiftHandler}
                        className='cursor-pointer hover:text-violet-600'>
                            <FiChevronRight />
                        </button>
                    </div>
                    <div className=" mt-4">
                        <button onClick={surpriseHandler}
                        className='bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                            Surprise Me
                        </button>
                    </div>
        </div>
        </>
    );
}

export default Testimonial;