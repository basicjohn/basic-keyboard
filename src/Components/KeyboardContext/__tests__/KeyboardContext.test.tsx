import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContextProvider, useKeyboardContext } from '../KeyboardContext';

describe('KeyboardContext', () => {
  const TestComponent = () => {
    const { message, shift, onWriteCharacter, onModifyCharacter, onDeleteCharacter } = useKeyboardContext();
    return (
      <div>
        <div>{message}</div>
        <div>{shift ? 'Shift is active' : 'Shift is inactive'}</div>
        <button onClick={() => onWriteCharacter('A')}>Write A</button>
        <button onClick={() => onModifyCharacter()}>Toggle Shift</button>
        <button onClick={() => onDeleteCharacter()}>Delete Character</button>
      </div>
    );
  };

  it('should render the initial state', () => {
    render(
      <TestComponent />,
      { wrapper: ContextProvider }
    );
    expect(screen.getByText('')).toBeInTheDocument();
    expect(screen.getByText('Shift is inactive')).toBeInTheDocument();
  });

  it('should update the message on writing a character', () => {
    render(
      <TestComponent />,
      { wrapper: ContextProvider }
    );
    fireEvent.click(screen.getByText('Write A'));
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('should toggle shift on clicking the toggle shift button', () => {
    render(
      <TestComponent />,
      { wrapper: ContextProvider }
    );
    fireEvent.click(screen.getByText('Toggle Shift'));
    expect(screen.getByText('Shift is active')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Toggle Shift'));
    expect(screen.getByText('Shift is inactive')).toBeInTheDocument();
  });

  it('should delete the last character on clicking the delete character button', () => {
    render(
      <TestComponent />,
      { wrapper: ContextProvider }
    );
    fireEvent.click(screen.getByText('Write A'));
    fireEvent.click(screen.getByText('Delete Character'));
    expect(screen.getByText('')).toBeInTheDocument();
  });
});