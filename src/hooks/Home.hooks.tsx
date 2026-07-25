"use no memo";

import { useEffect, useState, type SyntheticEvent } from "react";
import {
  ServiceGithub,
  type IGetReposUserGitHub,
  type IGetUserGitHub,
} from "../service/github.service";
import { useNavigate, useParams } from "react-router";

const serviceGitHub = new ServiceGithub();

export function useHome() {
  const navigate = useNavigate();
  const { username: usernameParam } = useParams<{ username?: string }>();
  const [search, setSearch] = useState<string>(usernameParam ?? "");
  const [filterName, setFilterName] = useState<string>("");
  const [sort, setSort] = useState<string>("stars-desc");
  const [userGitHub, setUserGitHub] = useState<IGetUserGitHub>();
  const [notFound, setNotFound] = useState(false);
  const [userReposGitHub, setReposUserGitHub] = useState<IGetReposUserGitHub[]>(
    [],
  );

  useEffect(() => {
    if (!usernameParam) return;

    serviceGitHub.getUserGitHub(usernameParam).then((user) => {
      if (!user) {
        setNotFound(true);
        setUserGitHub(undefined);
        setReposUserGitHub([]);
        return;
      }

      setNotFound(false);
      setUserGitHub(user);

      serviceGitHub.getReposUserGitHub(usernameParam).then((repos) => {
        setReposUserGitHub(repos);
      });
    });
  }, [usernameParam]);

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  function handleFilterChange(value: string) {
    setFilterName(value);
  }

  function handleSortChange(value: string) {
    setSort(value);
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = search.trim();
    if (!trimmed) return;

    const user = await serviceGitHub.getUserGitHub(trimmed);

    if (!user) {
      setNotFound(true);
      return;
    }

    setNotFound(false);
    navigate(`/user/${trimmed}`);
  }

  const filteredAndSortedRepos = [...(userReposGitHub ?? [])]
    .filter((repo) =>
      repo.name.toLowerCase().includes(filterName.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "stars-desc") return b.stargazers_count - a.stargazers_count;
      if (sort === "stars-asc") return a.stargazers_count - b.stargazers_count;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return {
    search,
    handleSearchChange,
    handleSubmit,
    userGitHub,
    filterName,
    sort,
    handleFilterChange,
    handleSortChange,
    filteredAndSortedRepos,
    notFound,
  };
}
