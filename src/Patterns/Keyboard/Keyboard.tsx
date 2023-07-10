
// components
import KeyboardKey from "Components/KeyboardKey/KeyboardKey";

// styles
import styles from "./Keyboard.module.scss";

// data
import standard from "./../../data/keyboard_library/standard.json";

const rootClass = "Keyboard";

interface KeyboardProps {
  onKeyClick: (value: string) => void;
}

const keyboardRows = standard;

const Keyboard = (props: KeyboardProps) => {
  return (
    <div className={styles[rootClass]}>
    {keyboardRows.map((row, index) => {
      return (
        <div className={styles["keyboard-row"]} key={index}>
          {row.map((key, index) => {
            return (
              <KeyboardKey
                key={index}
                u={key.u}
                value={key.value}
                onKeyClick={() => props.onKeyClick(key.value)}
              />
            );
          })}
        </div>
      );
        })
    }
    </div>
  );
};

export default Keyboard;
