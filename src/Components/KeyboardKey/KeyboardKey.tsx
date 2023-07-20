import React, { useContext } from 'react';
import { ContextProvider, useKeyboardContext } from '../KeyboardContext/KeyboardContext';

interface KeyboardKeyProps {
  value: string;
}

function KeyboardKey({ value }: KeyboardKeyProps) {
  const { onKeyPress } = useKeyboardContext();

  const handleClick = () => {
    onKeyPress(value);
  };

  return (
    <button onClick={handleClick}>{value}</button>
  );
}

export default KeyboardKey;