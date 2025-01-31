import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';
import { useEffect } from 'react';

export default function Success() {
    // const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  // After 2 seconds, navigate to another page
  useEffect(() => {
    setTimeout(() => {
    //   setShowConfetti(false);  // Optionally stop the confetti animation
      navigate('/ChatbotInterface'); // Replace with your target route
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
