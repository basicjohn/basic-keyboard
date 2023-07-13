import React, { useContext, useState } from 'react';

interface InitialKeyboardStateTypes {
  message: string;
  shift: boolean;
}
interface KeyboardContextTypes extends InitialKeyboardStateTypes {
  onWriteCharacter: (character: string) => void;
  onModifyCharacter: () => void;
  onDeleteCharacter: () => void;
}

const KeyboardContext = React.createContext({
  message: "",
  shift: false
} as KeyboardContextTypes);

const ContextProvider = ({ children }: any) => {
  const { message: initialMessage, shift: initialShift } = useContext(KeyboardContext);
  const [message, setMessage] = useState(initialMessage);
  const [shift, setShift] = useState(initialShift); 

  const writeCharacter = (character: string) => {
    setMessage(message + character);
    setShift(false);
  };

  const modifyCharacter = () => {
    setShift(!shift);
  };

  const deleteCharacter = () => {
    setMessage(message.slice(0, -1));

  };

  const handleKeyboardEvent = (character: string) => {
    shift ? writeCharacter(character.toUpperCase()) : writeCharacter(character)
  };

  return (
    <KeyboardContext.Provider
      value={
        { message, shift, onWriteCharacter: writeCharacter, onModifyCharacter: modifyCharacter, onDeleteCharacter: deleteCharacter } as KeyboardContextTypes
      }
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext);
export default ContextProvider;