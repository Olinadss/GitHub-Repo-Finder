import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
  },
});

export interface IGetUserGitHub {
  login: string;
  name: string;
  email: string | null;
  bio: string | null;
  followers: number;
  following: number;
  avatar_url: string | null;
}

export interface IGetReposUserGitHub {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  stargazers_count: string;
}

export class ServiceGithub {
  constructor() {}

  async getUserGitHub(username: string): Promise<IGetUserGitHub> {
    const { data } = await api.get(`/users/${username}`);
    return data;
  }

  async getReposUserGitHub(username: string): Promise<IGetReposUserGitHub[]> {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
  }
}
