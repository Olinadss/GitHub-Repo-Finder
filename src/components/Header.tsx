import { Button } from "./Button";
import styles from "./Header.styles.module.css";
import { Input } from "./Input";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className="bi bi-github"></i>
      </div>
      <div className={styles.searchBar}>
        <Input placeholder="Digite um usuário do GitHub..." />
        <Button title="Buscar" />
      </div>
    </div>
  );
}
