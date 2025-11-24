import BookCard from "../../common/BookCard/BookCard";

import styles from "./BookCatalog.module.css";

const temporaryStorage = [
  {
    name: "1984",
    coverName: "/images/1984.jpg",
  },
  {
    name: "The Catcher In The Rye",
    coverName: "/images/the_catcher_in_the_rye.jpg",
  },
  {
    name: "The Great Gatsby",
    coverName: "/images/the_great_gatsby.jpg",
  },
  {
    name: "To Kill A Mockingbird",
    coverName: "/images/to_kill_a_mockingbird.jpg",
  },
  {
    name: "Animal Farm",
    coverName: "/images/animal_farm.jpg",
  },
  {
    name: "East of Eaden",
    coverName: "/images/east_of_eaden.jpg",
  },
  {
    name: "Fahrenheit 451",
    coverName: "/images/fahrenheit_451.jpg",
  },
];

const BookCatalog = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        {temporaryStorage.map((book) => (
          <BookCard
            key={book.name}
            bookName={book.name}
            bookCoverSrc={book.coverName}
            bookCoverAlt={book.name}
          />
        ))}
      </section>
    </div>
  );
};

export default BookCatalog;
