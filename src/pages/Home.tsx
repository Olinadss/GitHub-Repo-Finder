import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>testando</main>
      </div>
    </>
  );
}
