import React, { useState } from "react";
import "./FormProj.css";

function FormProj() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "option",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Final Report");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-3">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          className="outline"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          className="outline"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input
          className="outline"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          className="outline"
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="option">Option</option>
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="japan">Japan</option>
          <option value="southkorea">South Korea</option>
        </select>

        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          className="outline"
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-c33/104"
          value={formData.streetAddress}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="City">City</label>
        <br />
        <input
          className="outline"
          type="text"
          name="city"
          id="city"
          placeholder="Varanasi"
          value={formData.city}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="state">State / Province</label>
        <br />
        <input
          className="outline"
          type="text"
          name="state"
          id="state"
          placeholder="Uttar Pradesh"
          value={formData.state}
          onChange={changeHandler}
        />

        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          className="outline"
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="221010"
          value={formData.postalCode}
          onChange={changeHandler}
        />

        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comments on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidates applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidates accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset className="">
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button className="bg-blue-600 text-white font-bold rounded py-1 px-4 m-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default FormProj;
