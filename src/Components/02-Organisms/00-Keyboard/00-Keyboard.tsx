import KeyboardRow from "Components/01-Molecules/00-KeyboardRow/00-KeyboardRow";
import styles from "./00-Keyboard.module.scss";

// data
import mobile from "../../../data/keyboard_library/mobile.json";

const rootClass = "keyboard";

const keyboardRows = mobile;

const Keyboard = () => {
  return (
    <div className={styles[rootClass]}>
      {keyboardRows.map((row, index) => 
        <KeyboardRow key={index} width={80} keys={row} />
      )}
    </div>
  );
};

export default Keyboard;
