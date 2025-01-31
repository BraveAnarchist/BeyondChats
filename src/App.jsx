import { useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import "./App.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Success from "./pages/Success/Success";
import ChatbotInterface from "./pages/ChatbotInterface/ChatbotInterface";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ClientIntegration from "./pages/ClientIntegration/ClientIntegration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ClientSite" element={<ClientIntegration />}></Route>
        <Route path="/Error" element={<ErrorPage />}></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/ChatbotInterface" element={<ChatbotInterface />}></Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
