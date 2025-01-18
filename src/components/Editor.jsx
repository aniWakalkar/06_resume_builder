import {React, useState} from 'react';

const Editor = () => {
  
  const [personalDetails, setPersonalDetails] = useState({});

  const personalDetailsMethod = (e) => {
    const { name, value } = e.target; // Extract name and value from the event
    setPersonalDetails((prevDetails) => ({
      ...prevDetails, // Spread the existing details
      [name]: value,  // Update the specific field
    }));

    console.log(personalDetails)
  };

  return (
    <div className='h-[100%] p-2 mx-2 my-2 bg-white border shadow'>
      {/* <h4 className='font-bold text-xl mb-4 ml-10 mt-5'>WELCOME TO EDITOR</h4> */}
      <h4 className='font-bold text-xl mb-4 ml-10 mt-5'>PERSONAL DETAILS</h4>
      <form className="flex flex-col gap-6 px-10 py-5">
        {/* Name, Middle Name, PhoneNumber and Surname in One Line */}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="name">Name</label>
            <input
              name='name'
              id="name"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your name"
              value={personalDetails.name}
              onChange={personalDetailsMethod}
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="middle-name">Middle Name</label>
            <input
              name="middle"
              id="middle"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your middle name"
              value={personalDetails.middle}
              onChange={personalDetailsMethod}
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="surname">Surname</label>
            <input
              name="surname"
              id="surname"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your surname"
              value={personalDetails.surname}
              onChange={personalDetailsMethod}
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="phone">Phone Number</label>
            <input
              name="phone"
              id="phone"
              type="tel"
              className="border rounded p-2"
              placeholder="Enter your phone number"
              maxLength="10"
              pattern="\d{10}" 
              value={personalDetails.phone}
              onChange={personalDetailsMethod}
              required 
            />
          </div>
        </div>

          {/* Email , LinkedIn and Github*/}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="border rounded p-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="linkedin">LinkedIn Address</label>
            <input
              id="linkedin"
              type="url"
              className="border rounded p-2"
              placeholder="Enter your LinkedIn profile URL"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="github">GitHub Address</label>
            <input
              id="github"
              type="url"
              className="border rounded p-2"
              placeholder="Enter your GitHub profile URL"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            className="border rounded p-2"
            placeholder="Enter your address"
          />
        </div>


        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            className="border rounded p-2 resize-none h-24"
            placeholder="Enter a brief summary"
            required
          ></textarea>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Editor;
