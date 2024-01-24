import { useEffect , useState } from 'react'
import axios from 'axios'
import { Subnav } from "../Components/subnav";
export function View() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:3000`)
        .then(response => setContacts(response.data))
        .catch(error => console.error(error));
    }, []);
    return (
      <>
      <Subnav />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-3/4 p-6">
        {contacts.map((contact, index) => (
          <div key={index} className={`mb-4 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-all rounded-md shadow-md`}>
            <h1 className="text-2xl font-bold mb-2">Project Name: {contact.username}</h1>
            <h2 className="text-gray-600 mb-2">User Email: {contact.email}</h2>
            <h2 className="text-gray-600 mb-2">Project Description & URL: {contact.message}</h2>
          </div>
        ))}
      </div>
    </div>
      </>
    )
}
