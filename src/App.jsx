import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ApiProvider } from './context/ApiContext.jsx';
import CreatePost from './components/CreatePost.jsx';
import Settings from './pages/Settings.jsx';
import Profile from './pages/Profile.jsx';
import Layout from './components/Layout.jsx';

const App = () => {
  const [count, setCount] = useState(0)

    return (
      <div>

      
      <CreatePost/>
      <ApiProvider>
        <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/create-post" element={<CreatePost/>}/>

                <Route path="/Settings" element={<Settings/>}/>
            </Routes>
            </Layout>
        </Router>
        </ApiProvider>
        </div>
    );
};




  
export default App
