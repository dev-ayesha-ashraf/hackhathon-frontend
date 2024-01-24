import React from 'react'
import teamImage from '../images/team.jpg'
import { NavLink } from "react-router-dom";

export const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg border-2 border-[#363768]">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Us</h1>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={teamImage}
                  alt="Team Photo"
                  className="w-full rounded-md shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:ml-6">
                <p className="text-gray-600 mb-6">
                  Welcome to our website! We are a passionate team dedicated to providing
                  amazing experiences and solutions for our users.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to create innovative and user-friendly products that make a
                  positive impact on people's lives.
                </p>
                <p className="text-gray-600 mb-6">
                  Feel free to explore our website and learn more about our team and
                  projects.
                </p>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                    <NavLink navigate to="/register">Register</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
            <div className="w-16 h-16 bg-green-300 rounded-full"></div>
            <div className="w-16 h-16 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      );}