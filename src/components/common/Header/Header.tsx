import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          Catalog
        </Link>
        <Link className={styles.link} to="/favorites">
          Favorites
        </Link>
      </header>
    </div>
  );
};

export default Header;
