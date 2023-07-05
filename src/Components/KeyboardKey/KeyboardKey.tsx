// dependencies
import classNames from 'classnames';

// styles
import styles from "./KeyboardKey.module.scss";


interface KeyProps {
  u: 1 | number;
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
        width: `${u}em`,
      }}
      className={keyClasses}
      onClick={onKeyClick}
    >
      <div >{value}</div>
    </button>
  );
};

export default Key;
