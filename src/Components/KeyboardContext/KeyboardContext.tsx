import React, { useContext, useState } from 'react';

interface InitialKeyboardStateTypes {
  message: string;
  shift: boolean;
}
interface KeyboardContextTypes extends InitialKeyboardStateTypes {
  updateCurrentOrganization: (organizationId: string) => void;
}

const KeyboardContext = React.createContext({} as KeyboardContextTypes);

const ContextProvider = ({ children }: any) => {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(true); 

  const writeCharacter = (character: string) => {
    setMessage(message + character);
    setShift(false);
  };

  const modifyCharacter = (character: string) => {
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
        { message, shift } as KeyboardContextTypes
      }
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext);
export default ContextProvider;
