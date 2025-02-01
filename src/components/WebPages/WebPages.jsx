import React from "react";
import dummySite from "./dummyPages";

export default function WebPages() {
  const divStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  };

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/dataChunk.txt";
    link.download = "dataChunk.txt"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className="border-4 border-[#4bb3fd] flex animate__animated animate__fadeInUp"
      onClick={handleDownload}
    >
      <div className="flex-1 border-r-4 border-[#4bb3fd]">
        <h3 className="mt-5 text-center text-lg">Detected webpages</h3>
        <div className="flex flex-wrap relative">
          {dummySite.map((ele, idx) => {
            return (
              <>
                <iframe
                  className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg "
                  key={idx}
                  src={ele}
                />
                <div style={divStyle} onClick={handleDownload}></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex-1 border-r-4 border-[#4bb3fd]">
        <h3 className="mt-5 text-center text-lg">Scraped webpages</h3>
        <div className="flex flex-wrap relative">
          {dummySite.map((ele, idx) => {
            if (idx < 2) {
              return (
                <>
                  <iframe
                    className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg"
                    key={idx}
                    src={ele}
                  />
                  <div style={divStyle} onClick={handleDownload}></div>
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="mt-5 text-center text-lg">Pending webpages</h3>
        <div className="flex flex-wrap relative">
          {dummySite.map((ele, idx) => {
            if (idx >= 2) {
              return (
                <>
                  <iframe
                    className="overflow-scroll h-[35vh] w-[40%] m-[2vh] border-2 border-indigo-400 rounded-lg"
                    key={idx}
                    src={ele}
                  />
                  <div style={divStyle} onClick={handleDownload}></div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
