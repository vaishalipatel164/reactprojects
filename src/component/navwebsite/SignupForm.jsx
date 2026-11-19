import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm({setIsLoggedIn}) {

   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accoutType, setAccountType] = useState ("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if(formData.password != formData.confirmPassword) {
        toast.error("Password do not match");
        return;
    }

    setIsLoggedIn(true);

    const finalData = {
        ...formData,
        accoutType
    };

     console.log("Account Data:", finalData);

     toast.success("Account Created Successfully!");

    navigate("/dashboard");
  }

  return (
    <div >
      <div className="flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">

        <button 
        type="button"
        onClick={() => setAccountType("student")}
        className={`${accoutType === "student" ? "bg-gray-900 text-white" : "bg-transparent text-gray-400"} 
        py-2 px-5 rounded-full transition-all duration-200`}>
          Student
          </button>
        <button 
        type="button"
        onClick={() => setAccountType("instructor")}
        className={`${accoutType === "instructor" ? "bg-gray-900 text-white" : 
          "bg-transparent text-gray-400"} 
        py-2 px-5 rounded-full transition-all duration-200`}>
          Instructor
          </button>
      </div>

      <form onSubmit={submitHandler} className="mt-10">
        <div className="flex w-full gap-x-5 mt-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-5.5">
              First Name<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-800 rounded-lg text-white w-full p-3"
            />
          </label>

          <label  className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-5.5">
              Last Name<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-gray-800 rounded-lg text-white w-full p-3"
            />
          </label>
        </div>

        <div className="mt-4">
          <label  className="w-full mt-4">
          <p className="text-[0.875rem] text-white mb-1 leading-5.5">
            Email Address<sup className="text-pink-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-gray-800 rounded-lg text-white w-full p-3"
          />
        </label>
        </div>

        <div className="flex w-full gap-x-5 mt-4">
          <label className=" relative w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-5.5">
              Create Password<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-gray-800 rounded-lg text-white w-full p-3"
            />
            <span className="absolute right-3 cursor-pointer top-9.5"
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
               (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-5.5">
              Confirm Password<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-gray-800 rounded-lg text-white w-full p-3"
            />
            <span 
            className="absolute right-3  cursor-pointer top-9.5"
            onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
            (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
            </span>
          </label>
        </div>

        <button 
        type="submit"
        className="w-full bg-yellow-400 rounded-lg font-medium text-gray-900 px-3 py-2 mt-6">
          Create Account
          </button>
      </form>
    </div>
  );
}

export default SignupForm;
