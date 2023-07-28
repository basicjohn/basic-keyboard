import { Container } from "@mui/material";
import {useKeyboardContext } from "data/KeyboardContext/KeyboardContext";

import Keyboard from "Components/02-Organisms/00-Keyboard/00-Keyboard";

import styles from "./App.module.scss";

const App = () => {

  const {message} = useKeyboardContext();

  return (
    <Container className={styles["app"]}>
      <section className={styles["message"]}>
        <input className={styles["input-field"]} type="text" value={message} />
      </section>
      <section className={styles["keyboard"]}>
        <Keyboard />
      </section>
    </Container>
  );
};

export default App;
