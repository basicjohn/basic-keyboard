// dependencies
import React, { useRef, createContext, useContext, useState } from "react";
import { Container } from "@mui/material";
import ContextProvider, { useKeyboardContext } from "Components/KeyboardContext/KeyboardContext";

// patterns
import Keyboard from "Patterns/Keyboard/Keyboard";


// styles
import "./App.scss";

const InputContext = createContext({});

const App = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const KeyboardContext = useKeyboardContext();
  return (
    <ContextProvider>
    <div className="app">
      <Container>
        <input className="input-field" type="text" value={KeyboardContext.inputValue} ref={inputRef} />
        <Keyboard />

      </Container>
    </div>
    </ContextProvider>
  );
};

export default App;
