import { CardListRepo } from "../components/CardListRepo";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <CardListRepo
            name="teste"
            key={1}
            url="teste"
            description={"teste"}
            language={"teste"}
            stars={3}
          />
        </main>
      </div>
    </>
  );
}
