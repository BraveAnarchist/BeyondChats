import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import WebPages from "../../components/WebPages/WebPages";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {
  const [data, setData] = useState({
    companyName: "",
    companyUrl: "",
    companyDescription: "",
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user == null || !user.emailVerified) {
        navigate("/SignIn");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <form className="space-y-4 mx-[20vw] mt-[5vh] mb-[6vh]">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name:
          </label>
          <input
            type="text"
            value={data.companyName}
            onChange={(e) => setData({ ...data, companyName: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Website URL:
          </label>
          <input
            type="url"
            value={data.companyUrl}
            onChange={(e) => setData({ ...data, companyUrl: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Description:
          </label>
          <textarea
            value={data.companyDescription}
            onChange={(e) =>
              setData({ ...data, companyDescription: e.target.value })
            }
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setFlag(true);
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {flag && (
        <>
          <div className="flex mx-[20vw] justify-around align-center mb-[4vh] animate__animated animate__fadeInUp">
            <div className="flex">
              <h2 className="mr-[1vw]">Training bot</h2>
              <BeatLoader color="#4bb3fd" />
            </div>
            <Link
              to={"/Menu"}
              className=" bg-blue-500 px-[1vw] text-white py-2 rounded-md hover:bg-blue-600"
            >
              Skip
            </Link>
          </div>
          <WebPages />
        </>
      )}
    </>
  );
}
