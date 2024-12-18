import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ApiProvider } from './context/ApiContext.jsx';

const App = () => {
  const [count, setCount] = useState(0)

    return (
      <ApiProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </ApiProvider>
    );
};




  
export default App
