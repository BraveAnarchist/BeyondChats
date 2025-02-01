import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link, useNavigate } from "react-router-dom";

let genAI;
export default function Chatbot() {
  const [response, setResponse] = useState("Hi,I'm a chatbot. Ask me anything");
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    genAI = new GoogleGenerativeAI(API_KEY);
  }, []);

  async function gemini(prompt) {
    if (!genAI) {
      setResponse("API is initializing. Please try again in a moment.");
      return;
    }
    setResponse("Please wait");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const result = await model.generateContent(word);
      setWord("");
      const resp = await result.response;
      setResponse(resp.text());
    } catch (err) {
      alert(err);
      setResponse(err);
    }
    console.log(text);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-100 p-2 z-50 shadow-md text-sm">
        <div className="text-center relative">
          <i
            class="fa-regular fa-circle-left text-2xl absolute left-1  hover:text-[red]"
            onClick={() => navigate(-1)}
          ></i>
          Chatbot not working as intended?{" "}
          <Link
            to={`mailto:anonymousunkown9856@gmail.com?subject=RegardingIntegration`}
            className="text-blue-600 hover:underline"
          >
            Share feedback
          </Link>
        </div>
      </div>
      <div className="bg-[#027bce] p-[1vh] fixed bottom-[3vh] right-[1vw] h-[40vh] w-[20vw] rounded-t-xl rounded-b-lg flex flex-col justify-around">
        <div className="bg-[#00487c] text-white h-[60%] overflow-y-scroll rounded-sm p-[1vh]">
          {response}
        </div>
        <div className="flex items-center justify-around">
          <textarea
            className="bg-white text-black mt-[1vh] w-[80%] rounded-md p-1"
            name=""
            id=""
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          ></textarea>
          <button
            className="bg-[#d00000] hover:bg-[#b40000] p-[1vh] rounded-sm text-white"
            onClick={gemini}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
