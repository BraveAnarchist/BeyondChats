import React from 'react'
import { Link } from 'react-router-dom'

export default function Modal({show,toggle}) {
    const msg="1. Locate the <head> section of your website's HTML code 2. Copy the following code snippet into the <head> section of your website's HTML code:<script src='https://beyondchatJKAJWI123lssl.js'></script>"

    function copyToClipboard() {
        navigator.clipboard
          .writeText("<script src='https://beyondchatJKAJWI123lssl.js'></script>")
          .then(() => {
            alert("Copied successfully")
          })
          .catch((error) => {
            alert("Failed to copy", error);
          });
      };
  return (<>
    {show &&
    <div className="fixed z-10 h-[100vh] flex justify-center items-center bg-opacity-90">
      <div className="bg-white p-6 rounded-lg relative">
        <button
          
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <i onClick={toggle} className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="text-xl font-semibold mb-4">To integrate the chatbot into your website, please follow these simple steps:</h2>
        <p>{"1. Locate the <head> section of your website's HTML code"}</p>
        <p>{"2. Copy the following code snippet into the <head> section of your website's HTML code:<script src='https://beyondchatJKAJWI123lssl.js'></script>"}</p>
        <div className='flex justify-between mt-[1vh]'>
        <button onClick={copyToClipboard} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 ">Copy script tag</button>
        <Link to={`mailto:anonymousunkown9856@gmail.com?subject=RegardingIntegration&body=${msg}`} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 ">Send mail</Link>
        </div>
      </div>
    </div>}
    </>
  )
}
