import { useEffect, useState } from "react";
import BookCard from "../../common/BookCard/BookCard";
import temporaryStorage from "../../../storage/temp";
import styles from "./BookCatalog.module.css";

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
    <div className={styles.wrapper}>
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
  );
};

export default BookCatalog;
