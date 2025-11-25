import { useEffect, useState } from "react";
import BookCard from "../../common/BookCard/BookCard";
import temporaryStorage from "../../../storage/temp";
import styles from "./BookCatalog.module.css";
import { Link } from "react-router";

interface BookCatalogProps {
  showFavoritesOnly?: boolean;
}

const BookCatalog = ({ showFavoritesOnly }: BookCatalogProps) => {
  const [bookIds, setBookIds] = useState<string[]>(
    JSON.parse(localStorage.getItem("bookIds") || "[]")
  );

  useEffect(() => {
    const newBookIds = JSON.stringify(bookIds);
    localStorage.setItem("bookIds", newBookIds);
  }, [bookIds]);

  const storageToMap = showFavoritesOnly
    ? temporaryStorage.filter((book) => bookIds.includes(book.id.toString()))
    : temporaryStorage;

  return (
    <>
      {storageToMap.length > 0 ? (
        <div className={styles.wrapper_main}>
          <section className={styles.section}>
            {storageToMap.map((book) => (
              <BookCard
                key={book.id}
                bookId={book.id}
                bookName={book.name}
                bookCoverSrc={book.coverName}
                bookCoverAlt={book.name}
                bookIds={bookIds}
                onBookIdsChange={setBookIds}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className={styles.wrapper_empty}>
          {showFavoritesOnly ? (
            <p className={styles.message}>
              No books here. Return to{" "}
              <Link to="/" className={styles.return_to_catalog}>
                catalog
              </Link>{" "}
              to add some
            </p>
          ) : (
            <p className={styles.message}>No books available</p>
          )}
        </div>
      )}
    </>
  );
};

export default BookCatalog;
