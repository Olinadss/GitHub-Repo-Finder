import { useState, type SyntheticEvent } from "react";
import {
  ServiceGithub,
  type IGetReposUserGitHub,
  type IGetUserGitHub,
} from "../service/github.service";

export function useHome() {
  const serviceGitHub = new ServiceGithub();
  const [search, setSearch] = useState<string>("");
  const [userGitHub, setUserGitHub] = useState<IGetUserGitHub>();
  const [userReposGitHub, setReposUserGitHub] =
    useState<IGetReposUserGitHub[]>();

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search.trim()) return;
    const user = await serviceGitHub.getUserGitHub(search);
    setUserGitHub(user);
    const repos = await serviceGitHub.getReposUserGitHub(search);
    setReposUserGitHub(repos);
  }

  return {
    search,
    handleSearchChange,
    handleSubmit,
    userGitHub,
    userReposGitHub,
  };
}
