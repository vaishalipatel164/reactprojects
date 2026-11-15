import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/contact");
    }
    function backHandler() {
        navigate(-1);
    }
  return (
    <>
    <div>
      <div>This is About Page</div>
      <button
        className="border-amber-400 bg-amber-400 rounded px-2 mt-2"
        onClick={clickHandler}
      >
        Move to Contact Page
      </button><br />
      <button 
      className="border-amber-400 bg-amber-400 rounded px-2 mt-2"
      onClick={backHandler}>
        Go Back
      </button>
       </div>
    </>
  );
}

export default About;
