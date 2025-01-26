import {React, useState, useEffect} from 'react';

const Editor = () => {
  
  const [borderColor, setBorderColor] = useState('black'); // Default border color
  const [personalDetails, setPersonalDetails] = useState({});
  const [Details, setDetails] = useState([]); // Default border color

  const [skills, setSkills] = useState([]); // Default border color
  const [currentSkill, setCurrentSkill] = useState('');

  const [ExperienceDetails, setExperienceDetails] = useState({});
  const [Experience, setExperience] = useState([]); // Default border color

  const personalDetailsMethod = (e) => {
    const { name, value } = e.target; 
    setPersonalDetails((prevDetails) => ({
      ...prevDetails, 
      [name]: value, 
    }));
  };

  const addpersonalDetails = () => {
    setDetails((prev) => [...prev, personalDetails]); // Add the current Experience to the array
  };

  const addSkill = () => {
    if (currentSkill.trim() !== '') {
      setSkills((prev) => [...prev, currentSkill.trim()]); // Add the current skill to the array
      setCurrentSkill(''); // Clear the input field
    }
  };

  const addExperience = () => {
    setExperience((prev) => [...prev, ExperienceDetails]); // Add the current Experience to the array
  };

  const personalExperiencesMethod = (e) => {
    const { name, value } = e.target; 
    setExperienceDetails((prevExperiences) => ({
      ...prevExperiences, 
      [name]: value, 
    }));
  };

  useEffect(() => {
    console.log('Skills updated:', Experience);
  }, [skills, Experience, Details]);

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
              name="email"
              id="email"
              type="email"
              className="border rounded p-2"
              value={personalDetails.Email}
              onChange={personalDetailsMethod}
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
              name="linkedin"
              id="linkedin"
              type="url"
              className="border rounded p-2"
              value={personalDetails.LinkedIn}
              onChange={personalDetailsMethod}
              placeholder="Enter your LinkedIn profile URL"
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-medium" htmlFor="github">GitHub Address</label>
            <input
              name="github"
              id="github"
              type="url"
              className="border rounded p-2"
              value={personalDetails.GitHub}
              onChange={personalDetailsMethod}
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
            name="address"
            id="address"
            type="text"
            className="border rounded p-2"
            value={personalDetails.Address}
            onChange={personalDetailsMethod}
            placeholder="Enter your address"
            style={{ border: `1px solid ${borderColor}` }}
            onFocus={()=>{setBorderColor('blue')}} 
            onBlur={()=>{setBorderColor('black')}} 
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium" htmlFor="summary">Summary</label>
          <textarea
            name="summary"
            id="summary"
            className="border rounded p-2 resize-none h-24"
            value={personalDetails.Summary}
            onChange={personalDetailsMethod}
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
            type="button"
            onClick={addpersonalDetails}
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>

          <button
            type="button"
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
            type="button"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
      
      <hr className='my-10'/>

      <h4 className='font-bold text-xl mb-4 ml-10 mt-10'>EXPERIENCE DETAILS</h4>
      <form className="flex flex-col gap-6 px-10 py-5">
        {/* Name, Middle Name, PhoneNumber and Surname in One Line */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-medium" htmlFor="name">Position</label>
              <input
                name="Position"
                id="Position"
                type="text"
                className="border rounded p-2"
                placeholder="Enter your Position"
                value={ExperienceDetails.Position}
                onChange={personalExperiencesMethod}
                style={{ border: `1px solid ${borderColor}` }}
                onFocus={()=>{setBorderColor('blue')}} 
                onBlur={()=>{setBorderColor('black')}} 
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-medium" htmlFor="name">Company Name</label>
              <input
                name="Company"
                id="Company"
                type="text"
                className="border rounded p-2"
                placeholder="Enter your Company"
                value={ExperienceDetails.Company}
                onChange={personalExperiencesMethod}
                style={{ border: `1px solid ${borderColor}` }}
                onFocus={()=>{setBorderColor('blue')}} 
                onBlur={()=>{setBorderColor('black')}} 
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-medium" htmlFor="name">Joining Date</label>
              <input
                name="Joining"
                id="Joining"
                type="text"
                className="border rounded p-2"
                placeholder="Enter your Joining"
                value={ExperienceDetails.Joining}
                onChange={personalExperiencesMethod}
                style={{ border: `1px solid ${borderColor}` }}
                onFocus={()=>{setBorderColor('blue')}} 
                onBlur={()=>{setBorderColor('black')}} 
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-medium" htmlFor="name">Relieving Date</label>
              <input
                name="Relieving"
                id="Relieving"
                type="text"
                className="border rounded p-2"
                placeholder="Enter your Relieving"
                value={ExperienceDetails.Relieving}
                onChange={personalExperiencesMethod}
                style={{ border: `1px solid ${borderColor}` }}
                onFocus={()=>{setBorderColor('blue')}} 
                onBlur={()=>{setBorderColor('black')}} 
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium" htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              id="summary"
              value={ExperienceDetails.summary}
              onChange={personalExperiencesMethod}
              className="border rounded p-2 resize-none h-24"
              placeholder="Enter a brief summary"
              style={{ border: `1px solid ${borderColor}` }}
              onFocus={()=>{setBorderColor('blue')}} 
              onBlur={()=>{setBorderColor('black')}} 
              required
            ></textarea>
          </div>

          <div className="w-full mt-4">
            <h3 className="font-medium">Experience:</h3>
            <ul className="list-disc pl-6">
              {Experience.map((Experience, index) => (
                <li key={index}>{Experience.Position} -- {Experience.Company}</li> // Display the skills
              ))}
            </ul>
          </div>

        {/* Submit Button */}
        <div className="flex flex-wrap gap-4">
          <button
              type='button'
              onClick={addExperience} // Add the skill to the array
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
            >
            Add
          </button>

          <button
            type="button"
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
