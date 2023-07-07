// dependencies
import classNames from 'classnames';

// styles
import styles from "./KeyboardKey.module.scss";


interface KeyProps {
  u: number;
  value: string;
  type?: "shift" | "space" | string ;
  onKeyClick?: () => void;
}


const Key = (props: KeyProps) => {
  const { u, value, type, onKeyClick } = props;
  const keyClasses = classNames('key', type);


  return (
    <button 
      style={{
        width: `${u * 4}em`,
      }}
      className={styles[keyClasses]}
      onClick={onKeyClick}
    >
      <div >{value}</div>
    </button>
  );
};

export default Key;
