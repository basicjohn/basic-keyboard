// dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

// pages
import Home from "Patterns/Keyboard/Keyboard";

// styles
import "./App.scss";
import Keyboard from "Patterns/Keyboard/Keyboard";

const App = () => {
  return (
    <div className="app">
      <Container>
        <Keyboard />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes> */}

      </Container>
    </div>
  );
};

export default App;
