import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: IInputProps) {
  return <input className={styles.input} {...props} />;
}
