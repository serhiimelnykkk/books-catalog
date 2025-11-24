import { useEffect, useState } from "react";
import BookCard from "../../common/BookCard/BookCard";

import styles from "./BookCatalog.module.css";

const temporaryStorage = [
  {
    id: 1,
    name: "1984",
    coverName: "/images/1984.jpg",
  },
  {
    id: 2,
    name: "The Catcher In The Rye The Catcher In The Rye",
    coverName: "/images/the_catcher_in_the_rye.jpg",
  },
  {
    id: 3,
    name: "The Great Gatsby",
    coverName: "/images/the_great_gatsby.jpg",
  },
  {
    id: 4,
    name: "To Kill A Mockingbird",
    coverName: "/images/to_kill_a_mockingbird.jpg",
  },
  {
    id: 5,
    name: "Animal Farm",
    coverName: "/images/animal_farm.jpg",
  },
  {
    id: 6,
    name: "East of Eaden",
    coverName: "/images/east_of_eaden.jpg",
  },
  {
    id: 7,
    name: "Fahrenheit 451",
    coverName: "/images/fahrenheit_451.jpg",
  },
];

const BookCatalog = () => {
  const [bookIds, setBookIds] = useState<string[]>(
    JSON.parse(localStorage.getItem("bookIds") || "[]")
  );

  useEffect(() => {
    const newBookIds = JSON.stringify(bookIds);
    localStorage.setItem("bookIds", newBookIds);
  }, [bookIds]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        {temporaryStorage.map((book) => (
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
