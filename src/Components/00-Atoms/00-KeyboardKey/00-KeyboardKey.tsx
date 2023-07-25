import {useKeyboardContext } from '../../KeyboardContext/KeyboardContext';
import styles from './00-KeyboardKey.module.scss';

interface KeyboardKeyProps {
  value: string;
}

const rootClass = "key";

function KeyboardKey({ value }: KeyboardKeyProps) {
  const { onKeyPress } = useKeyboardContext();

  const handleClick = () => {
    onKeyPress(value);
  };

  return (
    <button className={styles[rootClass]}
    onClick={handleClick}>{value}</button>
  );
}

export default KeyboardKey;