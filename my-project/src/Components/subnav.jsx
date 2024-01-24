import React, { useState, useEffect } from "react";
import loginImage from "../images/project.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export function Subnav() {
    
    function handleLogout() {
        navigate("/")
    }
    return (
        <div className="bg-blue-500 p-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">Welcome to Project Dashboard</div>
                <div className="hidden md:flex space-x-4">
                    <button className="text-white hover:bg-blue-700 px-3 py-1 rounded"><NavLink to="/contact">Submit Project </NavLink></button>
                    <button className="text-white hover:bg-blue-700 px-3 py-1 rounded"><NavLink to="/view">View project</NavLink> </button>
                    <button className="text-white hover:bg-blue-700 px-3 py-1 rounded" onClick={handleLogout}>logout</button>
                </div>
                <div className="md:hidden">

                </div>
            </div>
        </div>
    )
}