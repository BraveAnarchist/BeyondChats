import React from "react";
import { useState,useEffect } from "react";
import dummySite from "./dummyPages";

export default function WebPages() {
  const [pages,setPages]=useState([]);

  return (
    <div>
      <div>
        <h2>Detected webpages</h2>
        <div>
            {dummySite.map((ele,idx)=>{
            return <iframe className="overflow-scroll h-[500px] w-[20%] m-[2vh] border-2 border-indigo-600" key={idx} src={ele} />
            })}
        </div>

        <h2>Scraped webpages</h2>
        <div>
        <iframe className="overflow-scroll h-[500px] w-[20%] m-[2vh] border-2 border-indigo-600" 
        src="https://www.flipkart.com/powerzone-apz-12-0pz600lmf-60-ah-battery-car/p/itm57c4ca17640e9?pid=VEBGSHNAWBA5GGTV&lid=LSTVEBGSHNAWBA5GGTVOU7RTX&marketplace=FLIPKART&cmpid=content_vehicle-battery_8965229628_gmc" // URL of the page you want to embed
        width="100%" // Width of the iframe
        height="600" // Height of the iframe
        title="Webpage Example"
        frameBorder="0" // Removes the border around the iframe
        allowFullScreen // Allows the iframe to go fullscreen
      />
        </div>

        <h2>Pending webpages</h2>
        <div>
            
        </div>
      </div>
    </div>
  );
}
