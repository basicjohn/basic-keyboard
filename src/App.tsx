// dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

// pages
import Home from "pages/Home/Home";

// styles
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      </Container>
    </div>
  );
};

export default App;
