import { Button } from "./Button";
import styles from "./Header.styles.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className={"bi bi-github"}></i>
      </div>
      <Button title="Buscar" />
    </div>
  );
}
