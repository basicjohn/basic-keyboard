
// components
import KeyboardKey from "Components/KeyboardKey/KeyboardKey";

// styles
import styles from "./Home.module.scss";
import CurrentWeather from "Components/CurrentWeather/CurrentWeather";

const rootClass = "home-page";

const keyboardRows = [
  [
    { value: "esc", u: 1 },
    { value: "f1", u: 1 },
    { value: "f2", u: 1 },
    { value: "f3", u: 1 },
    { value: "f4", u: 1 },
    { value: "f5", u: 1 },
    { value: "f6", u: 1 },
    { value: "f7", u: 1 },
    { value: "f8", u: 1 },
    { value: "f9", u: 1 },
    { value: "f10", u: 1 },
    { value: "f11", u: 1 },
    { value: "f12", u: 1 },
    { value: "delete", u: 1 },
  ],
  [
    { value: "`", u: 1 },
    { value: "1", u: 1 },
    { value: "2", u: 1 },
    { value: "3", u: 1 },
    { value: "4", u: 1 },
    { value: "5", u: 1 },
    { value: "6", u: 1 },
    { value: "7", u: 1 },
    { value: "8", u: 1 },
    { value: "9", u: 1 },
    { value: "0", u: 1 },
    { value: "-", u: 1 },
    { value: "=", u: 1 },
    { value: "backspace", u: 2 },
  ],
  [
    { value: "tab", u: 1.5 },
    { value: "q", u: 1 },
    { value: "w", u: 1 },
    { value: "e", u: 1 },
    { value: "r", u: 1 },
    { value: "t", u: 1 },
    { value: "y", u: 1 },
    { value: "u", u: 1 },
    { value: "i", u: 1 },
    { value: "o", u: 1 },
    { value: "p", u: 1 },
    { value: "[", u: 1 },
    { value: "]", u: 1 },
    { value: "\\", u: 1.5 },
  ],
  [
    { value: "caps lock", u: 1.75 },
    { value: "a", u: 1 },
    { value: "s", u: 1 },
    { value: "d", u: 1 },
    { value: "f", u: 1 },
    { value: "g", u: 1 },
    { value: "h", u: 1 },
    { value: "j", u: 1 },
    { value: "k", u: 1 },
    { value: "l", u: 1 },
    { value: ";", u: 1 },
    { value: "'", u: 1 },
    { value: "enter", u: 2.25 },
  ],
  [
    { value: "shift", u: 2.25 },
    { value: "z", u: 1 },
    { value: "x", u: 1 },
    { value: "c", u: 1 },
    { value: "v", u: 1 },
    { value: "b", u: 1 },
    { value: "n", u: 1 },
    { value: "m", u: 1 },
    { value: ",", u: 1 },
    { value: ".", u: 1 },
    { value: "/", u: 1 },
    { value: "shift", u: 2.75 },
  ],
  [
    { value: "ctrl", u: 1.25 },
    { value: "fn", u: 1.25 },
    { value: "alt", u: 1.25 },
    { value: "cmd", u: 1.25 },
    { value: "space", u: 6.25 },
    { value: "cmd", u: 1.25 },
    { value: "alt", u: 1.25 },
    { value: "ctrl", u: 1.25 },
  ],
  
]

const Home = () => {
  CurrentWeather();
  return (
    <>
    {keyboardRows.map((row, index) => {
      return (
        <div className={styles["keyboard-row"]} key={index}>
          {row.map((key, index) => {
            return (
              <KeyboardKey
                key={index}
                u={key.u}
                value={key.value}
                onKeyClick={() => console.log(`${key.value} was pressed`)}
              />
            );
          })}
        </div>
      );
        })
    }
    </>
  );
};

export default Home;
