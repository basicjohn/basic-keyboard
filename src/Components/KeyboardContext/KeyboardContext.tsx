import React, { useContext, useState } from 'react';

interface InitialKeyboardStateTypes {
  inputValue: string;
  shift: boolean;
}
interface KeyboardContextTypes extends InitialKeyboardStateTypes {
  updateCurrentOrganization: (organizationId: string) => void;
}

const KeyboardContext = React.createContext({} as KeyboardContextTypes);

const ContextProvider = ({ children }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [shift, setShift] = useState(true); 

  const writeCharacter = (character: string) => {
    setInputValue(inputValue + character);
    setShift(false);
  };

  const modifyCharacter = (character: string) => {
    setShift(!shift);
  };

  const deleteCharacter = () => {
    setInputValue(inputValue.slice(0, -1));

  };

  const handleKeyboardEvent = (character: string) => {
    shift ? writeCharacter(character.toUpperCase()) : writeCharacter(character)
  };

  return (
    <KeyboardContext.Provider
      value={
        { inputValue, shift } as KeyboardContextTypes
      }
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext);
export default ContextProvider;
