import { useState } from 'react'
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Success from './pages/Success/Success';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Menu/>}></Route>
          <Route path="/Success" element={<Success/>}></Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn/>}></Route>
        </Routes>
     
    </BrowserRouter>
  )
}

export default App
