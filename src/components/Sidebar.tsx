import type { IGetUserGitHub } from "../service/github.service";
import styles from "./Sidebar.module.css";

interface ISidebarProps {
  userGitHub: IGetUserGitHub | undefined;
}

export function Sidebar({ userGitHub }: ISidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.containerProfile}>
        <img
          className={styles.avatar}
          src={userGitHub?.avatar_url ?? ""}
          alt=""
        />
        <div className={styles.profile}>
          <strong>{userGitHub?.name ?? "-"}</strong>
          <span>{userGitHub?.login}</span>
        </div>
        <div className={styles.bio}>
          <span>{userGitHub?.bio}</span>
        </div>
        <div className={styles.followers}>
          <span>
            <i className="bi bi-people" />{" "}
            <strong>{userGitHub?.followers}</strong> followers
          </span>
          <span>
            <strong>{userGitHub?.following}</strong> following
          </span>
        </div>
        {userGitHub?.email && (
          <div className={styles.containerEmail}>
            <i className="bi bi-envelope"></i>
            <span className={styles.email}>{userGitHub?.email}</span>
          </div>
        )}
      </div>
    </aside>
  );
}
