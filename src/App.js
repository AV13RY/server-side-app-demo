import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Button = ({buttonText}) => {
    return <div>{buttonText}</div>;
};

const Home = () => {
  return <div><Button buttonText = "CLICK HERE!"/></div>;
};

const About = () => {
  return <div><Button buttonText = "DONT CLICK HERE!"/></div>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
