import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';
import { useEffect } from 'react';

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/ChatbotInterface'); 
    }, 4000);
  }, []);
  return (
    <div className='relative h-screen flex justify-center items-center bg-[#00487c]'>
    { <ReactConfetti />}
    <div className="text-center font-semibold text-white">
      <h1>Integration Successful!</h1>
      <p>Redirecting...</p>
    </div>
  </div>
  )
}
