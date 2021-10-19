import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Logo.com</h1>
        </div>
        <ul>
          <div className={styles.link}>
            <Link href={"/"}> Page 1</Link>
          </div>
          <div className={styles.link}>
            <Link href={"/"}> Page 2</Link>
          </div>
          <div className={styles.link}>
            <Link href={"/"}> Page 3</Link>
          </div>
        </ul>
      </header>
      <div className={styles.container}>{children}</div>
      <footer>
        <h3>I am footer</h3>
      </footer>
    </>
  );
}
