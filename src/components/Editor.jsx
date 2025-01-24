import {React, useState, useEffect} from 'react';

const Editor = () => {
  
  const [personalDetails, setPersonalDetails] = useState({});
  const [borderColor, setBorderColor] = useState('black'); // Default border color
  const [skills, setSkills] = useState([]); // Default border color
  const [currentSkill, setCurrentSkill] = useState('');

  const personalDetailsMethod = (e) => {
    const { name, value } = e.target; 
    setPersonalDetails((prevDetails) => ({
      ...prevDetails, 
      [name]: value, 
    }));
  };


  const addSkill = (e) => {
    e.preventDefault()
    if (currentSkill.trim() !== '') {
      setSkills((prev) => [...prev, currentSkill.trim()]); // Add the current skill to the array
      setCurrentSkill(''); // Clear the input field
    }
  };


  useEffect(() => {
    console.log('Skills updated:', skills);
  }, [skills]);
  
  return (
    <div className='font-serif h-[100%] p-2 mx-2 my-2 bg-white border shadow'>
      {/* <h4 className='font-bold text-xl mb-4 ml-10 mt-5'>WELCOME TO EDITOR</h4> */}
      <h4 className='font-bold text-xl mb-4 ml-10 mt-5'>PERSONAL DETAILS</h4>
      <form className="flex flex-col gap-6 px-10 py-5">
        {/* Name, Middle Name, PhoneNumber and Surname in One Line */}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your name"
              value={personalDetails.name}
              onChange={personalDetailsMethod}
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="middle-name">Middle Name</label>
            <input
              name="middle"
              id="middle"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your middle name"
              value={personalDetails.middle}
              onChange={personalDetailsMethod}
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="surname">Surname</label>
            <input
              name="surname"
              id="surname"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your surname"
              value={personalDetails.surname}
              onChange={personalDetailsMethod}
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="phone">Phone Number</label>
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
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required 
            />
          </div>
        </div>

          {/* Email , LinkedIn and Github*/}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="border rounded p-2"
              placeholder="Enter your email"
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="linkedin">LinkedIn Address</label>
            <input
              id="linkedin"
              type="url"
              className="border rounded p-2"
              placeholder="Enter your LinkedIn profile URL"
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="github">GitHub Address</label>
            <input
              id="github"
              type="url"
              className="border rounded p-2"
              placeholder="Enter your GitHub profile URL"
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            className="border rounded p-2"
            placeholder="Enter your address"
            style={{ border: `1px solid ${borderColor}` }}
            onFocus={()=>{setBorderColor('blue')}} 
            onBlur={()=>{setBorderColor('black')}} 
          />
        </div>


        <div className="flex flex-col">
          <label className="font-medium" htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            className="border rounded p-2 resize-none h-24"
            placeholder="Enter a brief summary"
            style={{ border: `1px solid ${borderColor}` }}
            onFocus={()=>{setBorderColor('blue')}} 
            onBlur={()=>{setBorderColor('black')}} 
            required
          ></textarea>
        </div>


        {/* Submit Button */}
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>

          <button
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>

      <hr className='my-10'/>

      <h4 className='font-bold text-xl mb-4 ml-10 mt-10'>SKILLS DETAILS</h4>
      <form className="flex flex-col gap-6 px-10 py-5">
        {/* Name, Middle Name, PhoneNumber and Surname in One Line */}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <input
              name="skill"
              id="skill"
              type="text"
              className="border rounded p-2"
              placeholder="Enter your skill"
              value={currentSkill} // Controlled input for the current skill
              onChange={(e) => setCurrentSkill(e.target.value)} // Update the current skill
              style={{ border: `1px solid ${borderColor}` }} // Dynamic border color
              onFocus={() => setBorderColor('blue')} // Change border color on focus
              onBlur={() => setBorderColor('black')} // Reset border color on blur
            />
          </div>
          <button
            type='button'
            onClick={addSkill} // Add the skill to the array
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
          <div className="w-full mt-4">
            <h3 className="font-medium">Skills:</h3>
            <ul className="list-disc pl-6">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li> // Display the skills
              ))}
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-wrap gap-4">

          <button
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
