import {useKeyboardContext } from '../../../data/KeyboardContext/KeyboardContext';
import styles from './00-KeyboardKey.module.scss';

interface KeyboardKeyProps {
  primary: string;
  secondary: string;
  unit: number;
}

const rootClass = "key";

function KeyboardKey({ primary, secondary, unit }: KeyboardKeyProps) {
  const { onKeyPress, shift } = useKeyboardContext();

  const handleClick = () => {
    shift === false ? onKeyPress(primary): onKeyPress(secondary);
  };

  return (
    <button className={styles[rootClass]}
      onClick={handleClick}
      style={{width: unit * 2 + "em"}}
    >{shift === false ? primary: secondary}</button>
  );
}

export default KeyboardKey;