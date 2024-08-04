import React from "react";
import "./App.css"; 
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main.jsx';
import Content from "./components/Content.jsx";

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/content" element={<Content/>}/>
      </Routes>
    </>
  );
}

export default App;
