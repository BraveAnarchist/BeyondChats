import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Link, useNavigate } from "react-router-dom";

export default function Menu({ randomPathHandler }) {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }

  const navigate = useNavigate();

  function randomPathHandler() {
    const random = Math.random();
    if (random < 0.5) {
      navigate("/Success");
    } else {
      navigate("/Error");
    }
  }

  return (
    <main className="grid min-h-[100vh] place-items-center bg-[#00487c] px-6 py-24 sm:py-32 lg:px-8">
      <i
        class="fa-regular fa-circle-left text-2xl fixed left-1 top-1 hover:text-[red]"
        onClick={() => navigate(-1)}
      ></i>
      <Modal show={show} toggle={toggle} />
      <div className="text-center">
        <div class="mt-10 flex items-center justify-center gap-x-6 max-[720px]:flex-col max-[720px]:gap-4">
          <Link
            to="/ClientSite"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-blue-700"
          >
            Test chatbot
          </Link>
          <Link
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-blue-700 "
            onClick={toggle}
          >
            Integrate on your website
          </Link>
          <div
            onClick={randomPathHandler}
            class="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-blue-700 hover:cursor-pointer"
          >
            {" "}
            Test integration button
          </div>
        </div>
      </div>
    </main>
  );
}
