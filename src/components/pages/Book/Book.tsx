import { useParams } from "react-router";
import temporaryStorage from "../../../storage/temp";
import NotFound from "../NotFound/NotFound";
import styles from "./Book.module.css";

const Book = () => {
  const { id } = useParams();

  if (id == null) {
    return <NotFound />;
  }

  const parsedId = parseInt(id);
  const book = temporaryStorage.find((book) => book.id === parsedId);

  if (book == null) {
    return <NotFound />;
  }

  return (
    <main className={styles.wrapper}>
      <img className={styles.book_cover} src={book.coverPath} alt={book.name} />
      <article className={styles.text_wrapper}>
        <h1 className={styles.book_name}>{book.name}</h1>
        <h3 className={styles.book_author_and_year}>
          {book.author} &middot; {book.year_published}
        </h3>
        <section className={styles.genres_wrapper}>
          {book.genres
            .sort((a, b) => a.localeCompare(b))
            .map((genre) => (
              <p className={styles.genre}> {genre} </p>
            ))}
        </section>
      </article>
    </main>
  );
};

export default Book;
