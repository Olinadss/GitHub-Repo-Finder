import { useNavigate } from "react-router";
import styles from "./RepoDetails.module.css";
import { useRepoDetails } from "../hooks/useRepoDetails";

export function RepoDetails() {
  const navigate = useNavigate();
  const { repo, loading, error, username } = useRepoDetails();

  if (loading) {
    return (
      <div className={styles.center}>
        <i className="bi bi-arrow-clockwise" /> Carregando...
      </div>
    );
  }

  if (error) {
    return <div className={styles.center}>{error}</div>;
  }

  if (!repo) return null;

  return (
    <>
      <div className={styles.container}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left" /> Voltar para o perfil de {username}
        </button>

        <div className={styles.card}>
          <h1 className={styles.name}>{repo.name}</h1>

          {repo.description && (
            <p className={styles.description}>{repo.description}</p>
          )}

          <div className={styles.meta}>
            <span className={styles.stars}>
              <i className="bi bi-star-fill" />
              {repo.stargazers_count} estrelas
            </span>

            <span className={styles.language}>{repo.language}</span>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <i className="bi bi-box-arrow-up-right" /> Ver no GitHub
          </a>
        </div>
      </div>
    </>
  );
}
