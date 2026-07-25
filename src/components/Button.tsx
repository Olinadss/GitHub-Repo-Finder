import styles from "./Button.module.css";

interface IButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ title, type }: IButtonProps) {
  return (
    <button type={type} className={styles.button}>
      <i className="bi bi-search"></i>
      {title}
    </button>
  );
}
