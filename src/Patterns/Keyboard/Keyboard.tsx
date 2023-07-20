
// components
import KeyboardKey from "Components/KeyboardKey/KeyboardKey";

// styles
import styles from "./Keyboard.module.scss";

// data
import mobile from "./../../data/keyboard_library/mobile.json";

const rootClass = "Keyboard";

// interface KeyboardProps {
//   onKeyClick: (value: string) => void;
// }

const keyboardRows = mobile;

const Keyboard = () => {
  return (
    <div className={styles[rootClass]}>
    {keyboardRows.map((row, index) => {
      return (
        <div className={styles["keyboard-row"]} key={index}>
          {row.map((key, index) => {
            return (
              <KeyboardKey
                key={index}
                value={key.primary}
                // unit={key.unit}
                // primary={key.primary}
                // onKeyClick={() => props.onKeyClick(key.value)}
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
