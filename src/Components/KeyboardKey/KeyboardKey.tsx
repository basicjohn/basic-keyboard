import React, { useState } from 'react';
import classNames from 'classnames';
import styles from "./KeyboardKey.module.scss";

interface KeyProps {
  unit: number;
  primary: string;
  secondary?: string;
  type?: "shift" | "space" | string;
  // onKeyClick?: (primary: string) => void;
}

const Key = ({ unit, primary, secondary, type } : KeyProps) => {
  const [isActive, setIsActive] = useState(false);

  const keyClasses = classNames(styles.key, styles[`key__${type}`], {
    [styles['key--active']]: isActive,
  });
  

  const handleMouseDown = () => {
    // onKeyClick && onKeyClick(primary);
    setIsActive(true);
  }

  const handleMouseUp = () => {
    setIsActive(false);
  }

  return (
    <button 
      style={{ width: `${unit * 4}em` }}
      className={keyClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div>{primary}</div>
    </button>
  );
};

export default Key;
