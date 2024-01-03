import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link className="Link" href="/meals">
                Meals
              </Link>
            </li>
            <li>
              <Link className="Link" href="/community">
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
