import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChatbotInterface() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#00487c] h-[100vh] flex justify-center items-center">
      <i
        class="fa-regular fa-circle-left text-2xl fixed left-1 top-1 hover:text-[red]"
        onClick={() => navigate(-3)}
      ></i>
      <div className="space-y-4 mx-[20vw] pt-[5vh] mb-[6vh] ">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Explore Admin Panel
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Start talking to your chatbot
        </button>

        <div className="flex justify-around space-x-6 mt-[5vh]">
          <div className="flex flex-col items-center">
            <button
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300"
              aria-label="Share on Facebook"
            >
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
            </button>
            <span className="mt-2 text-white">Share on Facebook</span>
          </div>

          <div className="flex flex-col items-center">
            <button
              className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition duration-300"
              aria-label="Share on Instagram"
            >
              {" "}
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </button>
            <span className="mt-2 text-white">Share on Instagram</span>
          </div>

          <div className="flex flex-col items-center">
            <button
              className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition duration-300"
              aria-label="Share on Twitter"
            >
              <a href="https://x.com/?mx=2">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
            </button>
            <span className="mt-2 text-white">Share on Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
