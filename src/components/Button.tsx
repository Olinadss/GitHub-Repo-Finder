import styles from "./Button.module.css";

interface IButtonProps {
  title: string;
}

export function Button({ title }: IButtonProps) {
  return (
    <button type="button" className={styles.button}>
      <i className="bi bi-search"></i>
      {title}
    </button>
  );
}
