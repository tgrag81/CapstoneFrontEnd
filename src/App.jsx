import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ApiProvider } from './context/ApiContext.jsx';
import CreatePost from './components/CreatePost.jsx';
import Settings from './pages/Settings.jsx'


const App = () => {
  const [count, setCount] = useState(0)

    return (
      <div>

      <h1>Create a New Post</h1>
      <CreatePost/>
      <ApiProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </ApiProvider>
        </div>
    );
};




  
export default App
