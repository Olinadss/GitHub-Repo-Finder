import styles from "./UserNotFound.module.css";

export function UserNotFound() {
  return (
    <div className={styles.container}>
      <i className="bi bi-person-x" />
      <h2>Usuário não encontrado</h2>
      <p>Verifique o nome digitado e tente novamente.</p>
    </div>
  );
}
