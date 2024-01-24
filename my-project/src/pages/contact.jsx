import React, { useState, useEffect } from "react";
import loginImage from "../images/project.png";
import { Subnav } from "../Components/subnav";


export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContactList(storedContacts);
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContactInfo({
      ...contactInfo,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your API call and data saving logic is correct
      const response = await fetch(`http://localhost:3000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactInfo)
      });

      if (response.ok) {
        // Save data to local storage
        const updatedContacts = [...contactList, contactInfo];
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));

        setContactList(updatedContacts);

        setContactInfo({
          username: "",
          email: "",
          message: ""
        });

        alert("Message sent successfully");
      } else {
        alert("Invalid Credentials");
      }

      console.log(response);
    } catch (error) {
      console.log("contact", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleDelete = (index) => {
    // Remove the contact at the specified index
    const updatedContacts = [...contactList];
    updatedContacts.splice(index, 1);

    // Update local storage and state
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    setContactList(updatedContacts);
  };

  return (
<>
<Subnav />
<div className="min-h-screen flex items-center justify-center ">
      <div className="flex w-screen flex-col md:flex-row">
        <div className="w-screen md:w-2/5 p-6">
          <img
            src={loginImage}
            alt="Contact"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex justify-center w-screen md:w-3/5 h-4/6">
          <div className='w-5/6 bg-white border-2 border-[#363768] p-6 rounded-md shadow-md'>
            <h2 className="text-2xl font-semibold mb-px text-center">Submit Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-px">
                  project Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={contactInfo.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-px">
                  User Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={contactInfo.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-px">
                  project Description & URL
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={contactInfo.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ul className="list-disc pl-4">
      {/* Display the list of contacts */}
      {contactList.map((contact, index) => (
        <li key={index} className="mb-4 p-4 border border-gray-300 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">{contact.username}</p>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-700">{contact.message}</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>


</>
    

  );
};
