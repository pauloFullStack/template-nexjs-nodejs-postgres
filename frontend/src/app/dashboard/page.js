import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
          <h1>Dashboard - usuários autenticados</h1>
        </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}