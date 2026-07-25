import type { SyntheticEvent } from "react";
import { Button } from "./Button";
import styles from "./Header.module.css";
import { Input } from "./Input";

interface IHeaderProps {
  search: string;
  handleSearchChange: (value: string) => void;
  handleSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void>;
}

export function Header({
  search,
  handleSearchChange,
  handleSubmit,
}: IHeaderProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <i className="bi bi-github" />
          <span className={styles.title}>
            Busque qualquer usuário do GitHub
          </span>
        </div>
        <div className={styles.searchBar}>
          <Input
            placeholder="Digite um usuário do GitHub..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Button title="Buscar" type="submit" />
        </div>
      </div>
    </form>
  );
}
