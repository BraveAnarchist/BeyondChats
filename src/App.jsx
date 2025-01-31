import { useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import "./App.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import AuthProvider  from './AuthProvider'; 
import Menu from "./pages/Menu/Menu";
import Success from "./pages/Success/Success";
import ChatbotInterface from "./pages/ChatbotInterface/ChatbotInterface";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ClientIntegration from "./pages/ClientIntegration/ClientIntegration";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ProtectedRoute><Home /></ProtectedRoute>}></Route>
        <Route path="/ClientSite" element={<ProtectedRoute><ClientIntegration /></ProtectedRoute>}></Route>
        <Route path="/Error" element={<ProtectedRoute><ErrorPage /></ProtectedRoute>}></Route>
        <Route path="/Success" element={<ProtectedRoute><Success /></ProtectedRoute>}></Route>
        <Route path="/Menu" element={<ProtectedRoute><Menu /></ProtectedRoute>}></Route>
        <Route path="/ChatbotInterface" element={<ProtectedRoute><ChatbotInterface /></ProtectedRoute>}></Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
