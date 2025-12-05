import BookCard from "../../common/BookCard/BookCard";
import temporaryStorage from "../../../storage/temp";
import styles from "./BookCatalog.module.css";
import { Link } from "react-router";
import useFavorites from "./hooks/useFavorites";

interface BookCatalogProps {
  showFavoritesOnly?: boolean;
}

const BookCatalog = ({ showFavoritesOnly }: BookCatalogProps) => {
  const { favorites, toggleFavorite } = useFavorites();

  const books = showFavoritesOnly
    ? temporaryStorage.filter((book) => favorites.includes(book.id))
    : temporaryStorage;

  return (
    <>
      {books.length > 0 ? (
        <div className={styles.wrapper_main}>
          <section className={styles.book_catalog}>
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favorites.includes(book.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className={styles.wrapper_empty}>
          {showFavoritesOnly ? (
            <p className={styles.message_empty}>
              No books here. Return to{" "}
              <Link to="/" className={styles.return_to_catalog}>
                catalog
              </Link>{" "}
              to add some
            </p>
          ) : (
            <p className={styles.message_empty}>No books available</p>
          )}
        </div>
      )}
    </>
  );
};

export default BookCatalog;
