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
      <h4 className={styles.book_name}>{book.name}</h4>
      <div>
        <p className={styles.book_author}>{book.author}</p>
        <p className={styles.book_year_published}>{book.year_published}</p>
      </div>
      <p className={styles.book_genres}>
        {book.genres
          .sort((a, b) => a.localeCompare(b))
          .map((genre, index, array) => (
            <>
              {genre}
              {index !== array.length - 1 && <> &middot; </>}
            </>
          ))}
      </p>
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
