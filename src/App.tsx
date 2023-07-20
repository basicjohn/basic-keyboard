// dependencies
import React, { useRef, createContext, useEffect } from "react";
import { Container } from "@mui/material";
import { ContextProvider, useKeyboardContext } from "Components/KeyboardContext/KeyboardContext";

// patterns
import Keyboard from "Patterns/Keyboard/Keyboard";


// styles
import "./App.scss";

const InputContext = createContext({});

const App = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const {message} = useKeyboardContext();


  return (
    <ContextProvider>
      <div className="app">
        <Container>
          <input className="input-field" type="text" defaultValue={message} ref={inputRef} />
          <Keyboard />

        </Container>
      </div>
    </ContextProvider>
  );
};

export default App;
