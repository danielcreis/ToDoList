import styles from '../Components/Header.module.css';
import rocketLogo from '../images/rocket.svg';
import toDo from '../images/todo.svg';

export function Header(){
  return(
  <div>
    <header className={styles.header}>
      <img src={rocketLogo}/>
      <img src={toDo} />
    </header>
  </div>)
}