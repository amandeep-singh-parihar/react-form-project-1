import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    state: "",
    ZIP: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form
        className="w-[65vw] border-2 hover:shadow-2xl ease-linear transition-all duration-300 px-5 my-4 rounded-md"
        onSubmit={submitHandler}
      >
        <div className="flex justify-center mt-4">
          <h1 className="text-3xl font-bold">Personal Details</h1>
        </div>

        <div>
          <h3 className="text-base font-semibold">First Name</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="text"
            placeholder="enter your first name"
            name="firstName"
            value={formData.firstName}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold">Last Name</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="text"
            placeholder="enter your first name"
            name="lastName"
            value={formData.lastName}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold">Email</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="email"
            placeholder="enter your email"
            name="email"
            value={formData.email}
          />
        </div>

        {/* dropdown */}
        {/* dropdown */}
        {/* dropdown */}
        {/* ******************************************************************************************************************** */}

        <div>
          <h3 className="text-base font-semibold">Country</h3>
          <select
            className="text-base font-semibold mt-2 border-2 rounded h-[35px] w-full px-2"
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Brazil">Brazil</option>
            <option value="Germany">Germany</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div>
          <h3 className="text-base font-semibold mt-2">Street Adress</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="text"
            placeholder="enter your address"
            name="address"
            value={formData.address}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold">State / Province</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="text"
            placeholder="enter your State"
            name="state"
            value={formData.state}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold">ZIP / Postal code</h3>
          <input
            onChange={changeHandler}
            className="border-2 rounded h-[35px] w-full px-2"
            type="number"
            placeholder="enter your ZIP"
            name="ZIP"
            value={formData.ZIP}
          />
        </div>

        {/* ******************************************************************************************************************** */}
        {/* dropdown */}
        {/* dropdown */}
        {/* dropdown */}

        {/* checkboxes */}
        {/* checkboxes */}
        {/* checkboxes */}
        {/* ******************************************************************************************************************** */}

        <fieldset>
          <legend className="text-base font-semibold mb-2">By Email</legend>
          <div className="flex gap-4">
            <input
              className="h-[14px] w-[14px] mt-1.5"
              onChange={changeHandler}
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
            />
            <label className="text-base font-semibold" htmlFor="comments">
              Comments
            </label>
          </div>
          <p className="px-7">
            Get notified when someone posts a comment on a posting.
          </p>

          <div>
            <div className="flex gap-4">
              <input
                className="h-[14px] w-[14px] mt-1.5"
                onChange={changeHandler}
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
              />
              <label className="text-base font-semibold" htmlFor="candidates">
                Candidates
              </label>
            </div>
            <p className="px-7">
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </fieldset>

        <div className="mb-4">
          <div className="flex gap-4 ">
            <input
              className="h-[14px] w-[14px] mt-1.5"
              onChange={changeHandler}
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
            />
            <label className="text-base font-semibold" htmlFor="offers">
              Offers
            </label>
          </div>
          <p className="px-7">
            Get notified when a candidate accepts or rejects an offer.
          </p>
        </div>

        {/* ******************************************************************************************************************** */}
        {/* checkboxes */}
        {/* checkboxes */}
        {/* checkboxes */}

        {/* Radio Buttons */}
        {/* Radio Buttons */}
        {/* Radio Buttons */}
        {/* ******************************************************************************************************************** */}

        <fieldset>
          <div className="mb-4">
            <legend className="text-base font-semibold">
              Push Notification
            </legend>
            <p>These are delivered via SMS to your mobile phone</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <input
                className="h-[14px] w-[14px] mt-1.5"
                onChange={changeHandler}
                type="radio"
                name="pushNotification"
                value="everything"
                id="everything"
                checked={formData.pushNotification === "everything"}
              />
              <label className="text-base font-semibold" htmlFor="everything">
                Everything
              </label>
            </div>
            <div className="flex gap-3">
              <input
                className="h-[14px] w-[14px] mt-1.5"
                onChange={changeHandler}
                type="radio"
                name="pushNotification"
                value="same as email"
                id="same as email"
                checked={formData.pushNotification === "same as email"}
              />
              <label
                className="text-base font-semibold"
                htmlFor="same as email"
              >
                Same as email
              </label>
            </div>
            <div className="flex gap-3">
              <input
                className="h-[14px] w-[14px] mt-1.5"
                onChange={changeHandler}
                type="radio"
                name="pushNotification"
                value="no push notification"
                id="no push notification"
                checked={formData.pushNotification === "no push notification"}
              />
              <label
                className="text-base font-semibold"
                htmlFor="no push notification"
              >
                No push notification
              </label>
            </div>
          </div>
        </fieldset>

        {/* ******************************************************************************************************************** */}
        {/* Radio Buttons */}
        {/* Radio Buttons */}
        {/* Radio Buttons */}

        <button className="p-1 px-6 bg-blue-600 text-white rounded-md font-bold mt-4 mb-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
