import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Navbar() {
    const count = useSelector((state) => state.counter);
    const componentsList = [
        {
            tabName: "Home",
            path: "/06_resume_builder",
        }
    ];


  return (
    <>
        <nav
        className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-around text-blue-gray-900">
            <Link
                to="/"
                className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
            >
                ASTHA {count}
            </Link>
            <ul className="flex gap-2 my-2 lg:mb-0 lg:mt-0 flex-row lg:items-center lg:gap-6">
                {componentsList.map((value, index) => (
                    <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900" key={index}>
                        <Link className="flex items-center transition-colors hover:text-blue-500" 
                            to={value.path}>
                            {value.tabName}
                        </Link>
                    </li>
                ))}   
            </ul>
            {/* <p className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                    to="/logout"
                    className="flex items-center transition-colors hover:text-blue-500"
                >
                    Logout 
                </Link>
            </p> */}
        </div>
        </nav>
    </>
  )
}

export default Navbar