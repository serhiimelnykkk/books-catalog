import BookCard from "../common/BookCard";

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
];

const BookCatalog = () => {
  return (
    <div>
      {temporaryStorage.map((book) => (
        <BookCard
          key={book.name}
          bookName={book.name}
          bookCoverSrc={book.coverName}
          bookCoverAlt={book.name}
        />
      ))}
    </div>
  );
};

export default BookCatalog;
