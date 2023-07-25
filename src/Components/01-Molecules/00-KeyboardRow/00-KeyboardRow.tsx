
// components
import KeyboardKey from "Components/00-Atoms/00-KeyboardKey/00-KeyboardKey";

// styles
import styles from "./00-KeyboardRow.module.scss";

// data
import mobile from "../../../data/keyboard_library/mobile.json";

const rootClass = "Keyboard";

interface key {
  primary: string;
}

interface KeyboardRowProps {
  width: number;
  keys: key[];
}



const KeyboardRow = ({width, keys}: KeyboardRowProps) => {
      return (
        <div className={styles["keyboard-row"]}>
          {keys.map((key, index) => {
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
};

export default KeyboardRow;
