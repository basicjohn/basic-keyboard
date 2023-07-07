
// components
import KeyboardKey from "Components/KeyboardKey/KeyboardKey";

// styles
import styles from "./Home.module.scss";
import CurrentWeather from "Components/CurrentWeather/CurrentWeather";

const rootClass = "home-page";

const Home = () => {
  CurrentWeather();
  return (
    <>
      <KeyboardKey u={1} value="1" onKeyClick={() => console.log("1 was pressed") }/>
      <KeyboardKey u={1} value="2" onKeyClick={() => console.log("2 was pressed") }/>
      <KeyboardKey u={1} value="3" onKeyClick={() => console.log("3 was pressed") }/>

    </>
  );
};

export default Home;
