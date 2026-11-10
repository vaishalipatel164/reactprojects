import React from 'react';

function Form() {
    function changeFirstNameHandler(event) {
         console.log("Printing First Name");
        console.log(event.target.value);
    }
    function changeLastNameHandler(event) {
        console.log("Printing Last Name");
         console.log(event.target.value);
    }
  return (
    <>
     <div className=''>
        <form action="">
            <input 
            className='border' 
            type="text" 
            placeholder='First Name'
            onChange={changeFirstNameHandler} />
            <br /><br />
            <input className='border'
            type="text"
            placeholder='Last Name'
            onChange={changeLastNameHandler} />
        </form>
     </div>
    </>
  );
}

export default Form;