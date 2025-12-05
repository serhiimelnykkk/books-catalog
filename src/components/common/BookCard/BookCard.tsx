import type { Book } from "../../../types";
import styles from "./BookCard.module.css";

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite(bookId: number): void;
}

const BookCard = ({ book, isFavorite, onToggleFavorite }: BookCardProps) => {
  return (
    <div className={styles.book_wrapper}>
      <img className={styles.book_cover} src={book.coverPath} alt={book.name} />
      <p className={styles.book_name}>{book.name}</p>
      <button
        className={styles.add_favorite_btn}
        onClick={() => onToggleFavorite(book.id)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
