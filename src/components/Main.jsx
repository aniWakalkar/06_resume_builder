import React from 'react';
import { useNavigate } from "react-router-dom";

import template_1 from "../images/template_1.png"
import template_3 from "../images/template_3.webp"

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className='h-[100%] p-2 mx-2 my-2 bg-white'>
      <h4 className='font-bold'>Select The Template</h4>
      <div className="img-container flex items-center justify-evenly">
        <div className="img1 w-[350px] h-[100%] border border-black">
          <img src={template_1} alt="cv-template" 
            onClick={() => { navigate("/06_resume_builder/editor"); }}
          />
        </div>
        <div className="img3 w-[350px] h-[100%] border border-black">
          <img src={template_3} alt="cv-template" 
            onClick={() => {navigate("/06_resume_builder/editor"); }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
