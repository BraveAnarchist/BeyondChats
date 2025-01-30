import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import WebPages from '../../components/WebPages/WebPages';

export default function Home() {
  const [data,setData]=useState({companyName:"",companyUrl:"",companyDescription:""});
  const [metaDescription, setMetaDescription] = useState('');
  return (
    <>
    <form className="space-y-4 mx-[20vw]">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name:</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => setCompanyName({...data,companyName:e.target.value})}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Website URL:</label>
            <input
              type="url"
              value={data.companyUrl}
              onChange={(e) => setCompanyUrl({...data,companyUrl:e.target.value})}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Description:</label>
            <textarea
              value={data.companyDescription}
              onChange={(e) => setCompanyDescription({...data,companyDescription:e.target.value})}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {metaDescription && (
            <div className="mt-4">
              <strong>Meta Description:</strong> {metaDescription}
            </div>)}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
        <WebPages/>
        </>
  )
}
