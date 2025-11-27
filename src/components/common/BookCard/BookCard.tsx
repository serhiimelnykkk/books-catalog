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
    <div className={styles.div}>
      <img className={styles.img} src={bookCoverSrc} alt={bookCoverAlt} />
      <p className={styles.p}>{bookName}</p>
      <button className={styles.btn} onClick={() => onToggleFavorite(bookId)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
