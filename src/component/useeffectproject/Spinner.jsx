import React from 'react'
import "./Spinner.css";

function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='spinner'>
        <p className='text-blue-950 text-lg font-semibold'></p>
      </div>
    </div>
  );
}

export default Spinner;