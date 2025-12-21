import type { Book } from "../../../types";
import styles from "./BookCard.module.css";
import { Link } from "react-router";
import Button from "../Button/Button";

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite(bookId: number): void;
}

const BookCard = ({ book, isFavorite, onToggleFavorite }: BookCardProps) => {
  return (
    <div className={styles.book_wrapper}>
      <Link to={`/books/${book.id}`} style={{ textDecoration: "none" }}>
        <img
          className={styles.book_cover}
          src={book.coverPath}
          alt={book.name}
        />
        <h4 className={styles.book_name}>{book.name}</h4>
      </Link>
      <div>
        <p className={styles.book_author}>{book.author}</p>
        <p className={styles.book_year_published}>{book.year_published}</p>
      </div>
      <p className={styles.book_genres}>
        {[...book.genres]
          .sort((a, b) => a.localeCompare(b))
          .map((genre, index, array) => (
            <span key={genre}>
              {genre}
              {index !== array.length - 1 && <> &middot; </>}
            </span>
          ))}
      </p>
      <Button onClick={() => onToggleFavorite(book.id)} variant="secondary">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </div>
  );
};

export default BookCard;
