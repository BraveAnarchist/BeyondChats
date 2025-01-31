import React from "react";
import { useState, useEffect } from "react";
import dummySite from "./dummyPages";

export default function WebPages() {
  const [pages, setPages] = useState([]);

  return (
    <div className="border-4 border-[#4bb3fd] flex animate__animated animate__fadeInUp">
      <div className="flex-1 border-r-4 border-[#4bb3fd]">
        <h3 className="mt-5 text-center text-lg">Detected webpages</h3>
        <div className="flex flex-wrap">
          {dummySite.map((ele, idx) => {
            return (
              <iframe
                className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg"
                key={idx}
                src={ele}
              />
            );
          })}
        </div>
      </div>
      <div className="flex-1 border-r-4 border-[#4bb3fd]">
        <h3 className="mt-5 text-center text-lg">Scraped webpages</h3>
        <div className="flex flex-wrap">
          {dummySite.map((ele, idx) => {
            if (idx < 2) {
              return (
                <iframe
                  className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg"
                  key={idx}
                  src={ele}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="mt-5 text-center text-lg">Pending webpages</h3>
        <div className="flex flex-wrap">
          {dummySite.map((ele, idx) => {
            if (idx >= 2) {
              return (
                <iframe
                  className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg"
                  key={idx}
                  src={ele}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
