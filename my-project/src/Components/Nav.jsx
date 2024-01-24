import { NavLink } from "react-router-dom";
import "./nav.css"
import logo from "../images/attachment.png"
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export function Nav() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='bg-[#363768] m-0'>
                <div className='max-w-[1240px] items-center flex justify-between mx-auto'>
                    <div className='text-3xl font-bold flex'>
                        <img src={logo} alt="" srcset="" className='w-18 h-14 mt-2' />
                        <p className='leading-[68px] ml-3 navHead text-white'><NavLink to="/">Share Shoot</NavLink></p>
                    </div>
                    {
                        toggle ?
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className=' text-2xl text-white mr-5 md:hidden block' />
                            :
                            <AiOutlineClose onClick={() => setToggle(!toggle)} className=' text-2xl text-white mr-5 md:hidden block' />

                    }
                    <ul className='hidden text-white md:flex gap-10 cursor-pointer font-semibold mr-5'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        {/* <li><NavLink to="/contact">Submission</NavLink></li> */}
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">LogIn</NavLink></li>

                    </ul>
                    {/* responsive menu */}
                    <ul className={`md:hidden text-white z-30 fixed bg-[darkblue] cursor-pointer pt-3 text-2xl text-center 
                   ${toggle ? 'left-[0]' : 'left-[-100%]'} 
                    top-[68px] font-semibold w-screen h-screen m-0`}>
                        <li className="p-6 w-full"><NavLink to="/">Home</NavLink></li>
                        <li className="p-6 w-full"><NavLink to="/about">About</NavLink></li>
                        <li className="p-6 w-full"><NavLink to="/service">Service</NavLink></li>
                        {/* <li className="p-6 w-full"><NavLink to="/contact">Submission</NavLink></li> */}
                        <li className="p-6 w-full"><NavLink to="/features">Features</NavLink></li>
                        <li className="p-6 w-full"><NavLink to="/register">Register</NavLink></li>
                        <li className="p-6 w-full"><NavLink to="/login">LogIn</NavLink></li>

                    </ul>
                </div>
            </div>

        </>
    )
}