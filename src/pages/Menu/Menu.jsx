import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Link } from 'react-router-dom';

export default function Menu() {
  const[show,setShow]=useState(false);
  function toggle(){
    setShow(!show);
  }
  return (
<main class="grid min-h-[100vh] place-items-center bg-[#00487c] px-6 py-24 sm:py-32 lg:px-8">
  <Modal show={show} toggle={toggle}/>
  <div class="text-center">
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500">Test chatbot</a>
      <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 " onClick={toggle}>Integrate on your website</a>
      <Link to={"/Success"} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500">	Test integration button</Link>
    </div>
  </div>
</main>
  )
}
