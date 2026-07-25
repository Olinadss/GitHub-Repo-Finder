import { Input } from "./Input";
import styles from "./RepoListFilter.module.css";

interface IRepoListFilterProps {
  count: number;
  search: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function RepoListFilter({
  count,
  search,
  sort,
  onSearchChange,
  onSortChange,
}: IRepoListFilterProps) {
  return (
    <div className={styles.header}>
      <span className={styles.count}>{count} repositórios</span>

      <div className={styles.controls}>
        <Input
          placeholder="Filtrar por nome..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <select
          className={styles.select}
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="stars-desc">⭐ Mais estrelas</option>
          <option value="stars-asc">⭐ Menos estrelas</option>
          <option value="name-asc">A → Z</option>
          <option value="name-desc">Z → A</option>
        </select>
      </div>
    </div>
  );
}
