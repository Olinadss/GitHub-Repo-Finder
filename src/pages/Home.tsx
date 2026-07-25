import { CardListRepo } from "../components/CardListRepo";
import { Header } from "../components/Header";
import { RepoListFilter } from "../components/RepoListFilter";
import { Sidebar } from "../components/Sidebar";
import { UserNotFound } from "../components/UserNotFound";
import { useHome } from "../hooks/Home.hooks";
import styles from "./Home.module.css";

export function Home() {
  const {
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
  } = useHome();

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        search={search}
        handleSubmit={handleSubmit}
      />

      {notFound && <UserNotFound />}

      {userGitHub && (
        <div className={styles.wrapper}>
          <Sidebar userGitHub={userGitHub} />
          <main>
            <RepoListFilter
              count={filteredAndSortedRepos.length}
              search={filterName}
              sort={sort}
              onSearchChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
            <div className={styles.repoList}>
              {filteredAndSortedRepos.map((repo) => (
                <CardListRepo
                  key={repo.id}
                  repo={repo}
                  username={userGitHub.login}
                />
              ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
