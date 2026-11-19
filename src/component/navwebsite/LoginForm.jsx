import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        email:"", password:""
    });

    const [showPassword, setShowPassword] = useState (false);

    function changeHandler(event) {
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }
    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully!");
        console.log("Login Data:", formData);
        navigate("/dashboard");
    }
  return (
    <>
      <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-5.5">
            Email Address <sup className="text-pink-400">*</sup>
          </p>
          <input 
          required
          type="email"
          value={formData.email}
          onChange={changeHandler} 
          placeholder="Enter Email Address"
          name="email"
          className="bg-gray-800 rounded-lg text-white w-full p-3"/>
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-white mb-1 leading-5.5">
            Password 
            <sub className="text-pink-400">*</sub>
          </p>
          <input 
          required
          type={showPassword ? ("text") : ("password")}
          value={formData.password}
          onChange={changeHandler} 
          placeholder="Enter Password"
          name="password"
          className="bg-gray-800 rounded-lg text-white w-full p-3"/>

          <span className="absolute right-3 cursor-pointer top-9.5"
          onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
             (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) }
          </span>

          <Link to="#">
          <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">Forgot Password</p>
          </Link>
        </label>

        <button 
        type="submit"
        className="bg-yellow-400 rounded-lg font-medium text-gray-900 px-3 py-2 mt-6">
            Sign In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
