import React, { useState } from 'react';
import classNames from 'classnames';
import styles from "./KeyboardKey.module.scss";

interface KeyProps {
  u: number;
  value: string;
  type?: "shift" | "space" | string;
  onKeyClick?: (value: string) => void;
}

const Key = (props: KeyProps) => {
  const { u, value, type, onKeyClick } = props;
  const [isActive, setIsActive] = useState(false);

  const keyClasses = classNames(styles.key, styles[`key__${type}`], {
    [styles['key--active']]: isActive,
  });
  

  const handleMouseDown = () => {
    onKeyClick && onKeyClick(value);
    setIsActive(true);
  }

  const handleMouseUp = () => {
    setIsActive(false);
  }

  return (
    <button 
      style={{ width: `${u * 4}em` }}
      className={keyClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div>{value}</div>
    </button>
  );
};

export default Key;
