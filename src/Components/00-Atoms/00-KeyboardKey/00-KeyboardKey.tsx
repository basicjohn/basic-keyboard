import {useKeyboardContext } from '../../../data/KeyboardContext/KeyboardContext';
import styles from './00-KeyboardKey.module.scss';

interface KeyboardKeyProps {
  value: string;
  unit: number;
}

const rootClass = "key";

function KeyboardKey({ value, unit }: KeyboardKeyProps) {
  const { onKeyPress } = useKeyboardContext();

  const handleClick = () => {
    onKeyPress(value);
  };

  return (
    <button className={styles[rootClass]}
    onClick={handleClick}
    style={{width: unit * 2 + "em"}}
    >{value}</button>
  );
}

export default KeyboardKey;