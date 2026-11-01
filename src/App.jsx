import {React, useEffect, useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState ('');
  // const [name, setName] = useState ('Vaishu')

  // // Variation 1 -> Every Render.
  // useEffect(() => {
  //   console.log("UI RENDERING DONE")
  // });

  // //Variation 2 -> First render.
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  // //Variation 3 -> First Render + Whenever dependency changes.
  // useEffect (() => {
  //   console.log("Change Observed")
  // }, [name]);

  // //Variation 4 -> To Handle Umounting of a Component.
  // useEffect (() => {
  //   console.log("Listener Add");  //Add Event Listener

  //   return () => {
  //     console.log("Listener Removed");   //Remove Event Listener
  //   }
  // },[text];

  function changeHandler(event) {
       setText(event.target.value);
    console.log(text);
  }
  return (
    <>
    <div>
      <input type="text" onChange={changeHandler} className='border-2 border-red-800'/>
    </div>
    </>
  );
}

export default App;
