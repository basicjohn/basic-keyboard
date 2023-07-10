// dependencies
import React, { useRef } from "react";
import { Container } from "@mui/material";

// patterns
import Keyboard from "Patterns/Keyboard/Keyboard";


// styles
import "./App.scss";

const App = () => {
  const [value, setValue] = React.useState("");
  const [shift, setShift] = React.useState(true);
  const inputRef = useRef<HTMLInputElement>(null);


  const writeCharacter = (character: string) => {
    setValue(value + character);
    setShift(false);
    // Re-focus on the input element after button press
    inputRef.current?.focus();
  };

  const modifyCharacter = (character: string) => {
    setShift(!shift);
  };

  const deleteCharacter = () => {
    setValue(value.slice(0, -1));
    inputRef.current?.focus();
  };


  const handleKeyboardEvent = (character: string) => {
    shift ? writeCharacter(character.toUpperCase()) : writeCharacter(character)
  };



  return (
    <div className="app">
      <Container>
        <input className="input-field" type="text" value={value} ref={inputRef} />
        <Keyboard onKeyClick={handleKeyboardEvent} />

      </Container>
    </div>
  );
};

export default App;
