// dependencies
import React, { useRef } from "react";
import { Container } from "@mui/material";

// patterns
import Keyboard from "Patterns/Keyboard/Keyboard";


// styles
import "./App.scss";

const App = () => {
  const [value, setValue] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleKeyboardEvent = (event: KeyboardEvent) => {
  //   const { key } = event;
  //   if (key === "backspace") {
  //     setValue(value.slice(0, -1));
  //   } else if (key.length === 1) {  // Ignore special keys like Shift, Alt, etc.
  //     setValue(value + key);
  //   }
  // };

    

  const handleKeyPress = (character: string) => {
    setValue(value + character);
    // Re-focus on the input element after button press
    inputRef.current?.focus();
  };

  const handleButtonMouseDown = (character: string) => {

    handleKeyPress(character);
  };



  return (
    <div className="app">
      <Container>
        <input type="text" value={value} ref={inputRef} />
        <Keyboard onKeyClick={handleButtonMouseDown} />

      </Container>
    </div>
  );
};

export default App;
