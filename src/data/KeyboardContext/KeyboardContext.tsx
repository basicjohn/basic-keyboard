import React, { useContext, useState } from 'react';

interface InitialKeyboardStateTypes {
  message: string;
  shift: boolean;
  pressedKey: string | null;
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
  pressedKey: null
} as KeyboardContextType);

export const ContextProvider = ({ children }: any) => {
  const { message: initialMessage, shift: initialShift, pressedKey: initialPressedKey } = useContext(KeyboardContext);
  const [message, setMessage] = useState(initialMessage);
  const [shift, setShift] = useState(initialShift);
  const [pressedKey, setPressedKey] = useState(initialPressedKey);

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
    setMessage(message + key);
  };

  const handleKeyboardEvent = (character: string) => {
    shift ? writeCharacter(character.toUpperCase()) : writeCharacter(character)
  };

  return (
    <KeyboardContext.Provider
      value={
        { message, shift, pressedKey, onWriteCharacter: writeCharacter, onModifyCharacter: modifyCharacter, onDeleteCharacter: deleteCharacter, onKeyPress: handleKeyPress } as KeyboardContextType
      }
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext) as KeyboardContextType;