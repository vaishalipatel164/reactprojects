import React from "react";
import frameImg from "../../assets/image-bg.jpg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="flex w-11/12 max-w-290 justify-between py-5 mx-auto gap-x-5 gap-y-0">

      <div className="w-11/12 max-w-112.5">

        <h1 className="text-white font-semibold text-[1.875rem] leading-9.5">{title}</h1>

        <p className="text-[1.125rem] leading-6.5 mt-4">
          <span className="text-gray-100">{desc1}</span><br />
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
         (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-px bg-gray-800"></div>
          <p className="text-gray-700 font-medium leading-5.5">OR</p>
          <div className=" w-full h-px bg-gray-800"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-lg font-medium text-white border
         border-gray-700 px-3 py-2 gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-112.5">
        <img
          src={frameImg}
          alt="image"
          width={558}
          height={504}
          loading="lazy"
        />
        <img src={image} alt="image" width={558} height={504} loading="lazy" className="absolute -top-4 -left-4"/>
      </div>
    </div>
  );
}

export default Template;
