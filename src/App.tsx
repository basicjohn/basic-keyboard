// dependencies
import React, { useRef, createContext, useEffect } from "react";
import { Container } from "@mui/material";
import {useKeyboardContext } from "data/KeyboardContext/KeyboardContext";

// patterns
import Keyboard from "Components/02-Organisms/00-Keyboard/00-Keyboard";

// styles
import "./App.scss";

const App = () => {

  const {message} = useKeyboardContext();

  return (
      <div className="app">
        <Container>
          <input className="input-field" type="text" value={message} />
          <Keyboard />
        </Container>
      </div>
  );
};

export default App;
