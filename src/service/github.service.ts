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
  full_name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export class ServiceGithub {
  constructor() {}

  async getUserGitHub(username: string): Promise<IGetUserGitHub | null> {
    const response = await api.get(`/users/${username}`, {
      validateStatus: (status) => status < 500,
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  }

  async getReposUserGitHub(username: string): Promise<IGetReposUserGitHub[]> {
    const response = await api.get(`/users/${username}/repos`, {
      validateStatus: (status) => status < 500,
    });

    if (response.status === 404) {
      return [];
    }

    return response.data;
  }

  async getReposDetailGitHub(repoFullName: string) {
    const { data } = await api.get(`/repos/${repoFullName}`);
    return data;
  }
}
