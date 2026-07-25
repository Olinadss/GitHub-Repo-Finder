import styles from "./CardListRepo.module.css";

interface IRepoCardProps {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
}

export function CardListRepo({
  name,
  description,
  stars,
  language,
  url,
}: IRepoCardProps) {
  return (
    <a href={url} className={styles.card}>
      <h3 className={styles.name}>{name}</h3>

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.meta}>
        <span className={styles.stars}>
          <i className="bi bi-star-fill" /> {stars}
        </span>

        {language && (
          <span className={styles.language}>
            <span className={styles.languageDot} /> {language}
          </span>
        )}
      </div>
    </a>
  );
}
