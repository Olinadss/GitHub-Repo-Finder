import { CardListRepo } from "../components/CardListRepo";
import { Header } from "../components/Header";
import { RepoListFilter } from "../components/RepoListFilter";
import { Sidebar } from "../components/Sidebar";
import { useHome } from "../hooks/Home.hooks";
import styles from "./Home.module.css";

export function Home() {
  const {
    search,
    handleSearchChange,
    handleSubmit,
    userGitHub,
    userReposGitHub,
  } = useHome();

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        search={search}
        handleSubmit={handleSubmit}
      />
      {userGitHub && (
        <div className={styles.wrapper}>
          <Sidebar userGitHub={userGitHub} />
          <main>
            <RepoListFilter
              count={8}
              onSearchChange={() => {}}
              search=""
              sort="teste"
              onSortChange={() => {}}
            />
            <div className={styles.repoList}>
              {userReposGitHub &&
                userReposGitHub.map((repo) => (
                  <CardListRepo key={repo.id} repo={repo} />
                ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
