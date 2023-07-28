import React, { useContext, useState } from 'react';

interface InitialKeyboardStateTypes {
  message: string;
  shift: boolean;
}
interface KeyboardContextType extends InitialKeyboardStateTypes {
  onWriteCharacter: (character: string) => void;
  onModifyCharacter: () => void;
  onDeleteCharacter: () => void;
  onKeyPress: (key: string) => void;
}

const KeyboardContext = React.createContext({
  message: "",
  shift: false,
} as KeyboardContextType);

export const ContextProvider = ({ children }: any) => {
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

  const handleKeyPress = (key: string) => {
    if (key === "shift") {
      modifyCharacter();
      return;
    } else if (key === "delete") {
      deleteCharacter();
      return;
    } else if (key === "space") {
      writeCharacter(" ");
      return;
    }
    writeCharacter(key);
  };

  return (
    <KeyboardContext.Provider
      value={
        { message, shift, onWriteCharacter: writeCharacter, onModifyCharacter: modifyCharacter, onDeleteCharacter: deleteCharacter, onKeyPress: handleKeyPress } as KeyboardContextType
      }
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext) as KeyboardContextType;