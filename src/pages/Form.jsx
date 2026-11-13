import React, { useState } from "react";
import "./Form.css"

function Form() {

  const [formData, setFormData] = useState({firstName: "",
     lastName: "", email: "", comment:"", checkbox:true, status:"", dropdown:""});

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing Form Data...");
    console.log(formData)
  }

  return (
    <>
      <div className="form-style">
        <form onSubmit={submitHandler}>

          <input
            className="border"
            type="text"
            placeholder="First Name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />

          <br />
          <br />

          <input
            className="border"
            type="text"
            placeholder="Last Name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />

          <br />
          <br />

          <input
            className="border"
            type="email"
            placeholder="Enter Your Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />

          <br />
          <br />

          <textarea className="border" 
           placeholder="Enter Your Comment Here..."
           onChange={changeHandler}
           name="comment"
           value={formData.comment}
          />

          <br />
          <br />

          <input className="border"
           type="checkbox"
           onChange={changeHandler}
           name="checkbox"
           id="visible"
           checked={formData.checkbox}
           />
         <label htmlFor="visible">I am Visible ?</label>

            <br />
            <br />
            
            <fieldset className="border space-x-2">
              <legend>Mode:</legend>
                <input
           type="radio"
           onChange={changeHandler}
           name="status"
           value="online-mode"
           id="online-mode"
           checked={formData.status === "online-mode"}
           />
          <label htmlFor="online-mode">Online Mode</label>

          <input 
           type="radio"
           onChange={changeHandler}
           name="status"
           value="offline-mode"
           id="offline-mode"
            checked={formData.status === "offline-mode"}
           />
          <label htmlFor="offline-mode">Offline Mode</label>
            </fieldset>

            <label htmlFor="dropdown">Tell Me Your Favourite Subject</label>
            <select className="border"
             onChange={changeHandler}
             name="dropdown"
             id="dropdown"
             value={formData.dropdown}
             >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Java Script">Java Script</option>
              <option value="React.Js">React.Js</option>
              <option value="Type.Js">Type.Js</option>
             </select>
             
             {/* <input className="border"
             type="submit"
             value="submit"
              /> */}

              <br /><br />

              <button className="border"
              >Submit</button>

        </form>
      </div>
    </>
  );
}

export default Form;
