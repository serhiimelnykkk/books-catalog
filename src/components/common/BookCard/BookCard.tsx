import styles from "./BookCard.module.css";

interface BookCardProps {
  bookId: number;
  bookCoverSrc: string;
  bookCoverAlt: string;
  bookName: string;
  isFavorite: boolean;
  onToggleFavorite(bookId: number): void;
}

const BookCard = ({
  bookCoverSrc,
  bookCoverAlt,
  bookName,
  bookId,
  isFavorite,
  onToggleFavorite,
}: BookCardProps) => {
  return (
    <div className={styles.book_wrapper}>
      <img
        className={styles.book_cover}
        src={bookCoverSrc}
        alt={bookCoverAlt}
      />
      <p className={styles.book_name}>{bookName}</p>
      <button
        className={styles.add_favorite_btn}
        onClick={() => onToggleFavorite(bookId)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
