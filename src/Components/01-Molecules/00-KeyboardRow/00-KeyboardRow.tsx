import KeyboardKey from "Components/00-Atoms/00-KeyboardKey/00-KeyboardKey";
import styles from "./00-KeyboardRow.module.scss";

const rootClass = "keyboard-row";

interface key {
  primary: string;
}

interface KeyboardRowProps {
  width: number;
  keys: key[];
}

const KeyboardRow = ({width, keys}: KeyboardRowProps) => {
  return (
    <div className={styles[rootClass]}>
      {keys.map((key, index) => {
        return (
          <KeyboardKey
            key={index}
            value={key.primary}
          />
        );
      })}
    </div>
  );
};

export default KeyboardRow;
