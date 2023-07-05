
// components
import KeyboardKey from "Components/KeyboardKey/KeyboardKey";

// styles
import styles from "./Home.module.scss";

const rootClass = "home-page";

const Home = () => {
  return (
    <>
      <KeyboardKey u={1} value="1" onKeyClick={() => console.log("1 was pressed") }/>

    </>
  );
};

export default Home;
