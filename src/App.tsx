import { Container } from "@mui/material";
import {useKeyboardContext } from "data/KeyboardContext/KeyboardContext";

import Keyboard from "Components/02-Organisms/00-Keyboard/00-Keyboard";

import styles from "./App.module.scss";

const App = () => {

  const {message} = useKeyboardContext();

  return (
    <Container className={styles["app"]}>
      <input className={styles["input-field"]} type="text" value={message} />
      <Keyboard />
    </Container>
  );
};

export default App;
