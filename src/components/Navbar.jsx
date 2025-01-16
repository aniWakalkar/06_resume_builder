import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Navbar() {
    const count = useSelector((state) => state.counter);
    const componentsList = [
        {
            tabName: "Home",
            path: "/06_resume_builder",
        },
        {
            tabName: "Counter",
            path: "/06_resume_builder/counter",
        }
    ];


  return (
    <>
        <nav
        className="mx-2 my-1 px-6 py-2 text-white bg-white">
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
        </div>
        </nav>
    </>
  )
}

export default Navbar