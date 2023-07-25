
// components
import KeyboardKey from "Components/00-Atoms/00-KeyboardKey/00-KeyboardKey";

// styles
import styles from "./00-Keyboard.module.scss";

// data
import mobile from "../../../data/keyboard_library/mobile.json";
import KeyboardRow from "Components/01-Molecules/00-KeyboardRow/00-KeyboardRow";

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

              <KeyboardRow
                key={index}
                width={80}
                keys={row}
                // unit={key.unit}
                // primary={key.primary}
                // onKeyClick={() => props.onKeyClick(key.value)}
              />
            );

    }
    )
    }
    </div>
  );
};

export default Keyboard;
