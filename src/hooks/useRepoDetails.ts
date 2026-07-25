import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ServiceGithub,
  type IGetReposUserGitHub,
} from "../service/github.service";

const serviceGitHub = new ServiceGithub();

export function useRepoDetails() {
  const { username, repoName } = useParams<{
    username: string;
    repoName: string;
  }>();
  const [repo, setRepo] = useState<IGetReposUserGitHub>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username || !repoName) return;

    const repoFullName = `${username}/${repoName}`;

    serviceGitHub
      .getReposDetailGitHub(repoFullName)
      .then(setRepo)
      .catch((err) => {
        if (err.response?.status === 404) {
          setError("Repositório não encontrado.");
        } else {
          setError("Erro ao buscar repositório.");
        }
      })
      .finally(() => setLoading(false));
  }, [username, repoName]);

  return { repo, loading, error, username };
}
