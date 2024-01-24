import React from 'react'
import serviceImage from '../images/assistance.avif'

export const Service = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl p-8 rounded-md shadow-lg bg-white border-2 border-[#363768] mt-3">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-md overflow-hidden shadow-md">
                  <img
                    src={serviceImage} // Replace with your image URLs
                    alt={`Service ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Service {index + 1}</h2>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
            <div className="w-16 h-16 bg-green-300 rounded-full"></div>
            <div className="w-16 h-16 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      );
}