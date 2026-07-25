import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.containerProfile}>
        <img
          className={styles.avatar}
          src="https://github.com/olinadss.png"
          alt=""
        />
        <div className={styles.profile}>
          <strong>Danilo Santos</strong>
          <span>olinadss</span>
        </div>
        <div className={styles.followers}>
          <span>
            <i className="bi bi-people" /> <strong>60</strong> followers
          </span>
          <span>
            <strong>58</strong> following
          </span>
        </div>
        <div className={styles.containerEmail}>
          <i className="bi bi-envelope"></i>
          <span className={styles.email}>danilo.santossouza@outlook.com</span>
        </div>
      </div>
    </aside>
  );
}
