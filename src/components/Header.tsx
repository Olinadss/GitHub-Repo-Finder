import { Button } from "./Button";
import styles from "./Header.module.css";
import { Input } from "./Input";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className="bi bi-github"></i>
        <span className={styles.title}>Busque qualquer usuário do GitHub</span>
      </div>
      <div className={styles.searchBar}>
        <Input placeholder="Digite um usuário do GitHub..." />
        <Button title="Buscar" />
      </div>
    </div>
  );
}
