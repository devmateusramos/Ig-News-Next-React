import styles from "./styles.module.scss";
import Image from "next/image";
import logoSvg from "../../../public/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src='/images/logo.svg' alt='ig.news' /> */}
        <Image src={logoSvg} alt=' ignews seu blog de tecnologia' />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
