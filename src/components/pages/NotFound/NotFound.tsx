import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p className={styles.message}>Page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
