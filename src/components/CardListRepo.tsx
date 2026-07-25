import { Link } from "react-router";
import type { IGetReposUserGitHub } from "../service/github.service";
import styles from "./CardListRepo.module.css";

interface IRepoCardProps {
  repo: IGetReposUserGitHub;
  username: string;
}

export function CardListRepo({ repo, username }: IRepoCardProps) {
  return (
    <div className={styles.card}>
      <Link
        to={`/user/${username}/repo/${repo.name}`}
        className={styles.content}
      >
        <h3 className={styles.name}>{repo.name}</h3>
        <p className={styles.description}>{repo.description ?? "-"}</p>
        <div className={styles.meta}>
          <span className={styles.stars}>
            <i className="bi bi-star-fill" /> {repo.stargazers_count}
          </span>
          {repo.language && (
            <span className={styles.language}>{repo.language}</span>
          )}
        </div>
      </Link>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        onClick={(e) => e.stopPropagation()}
      >
        <i className="bi bi-box-arrow-up-right" /> Ver no GitHub
      </a>
    </div>
  );
}
