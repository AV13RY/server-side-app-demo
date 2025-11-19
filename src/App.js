import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
