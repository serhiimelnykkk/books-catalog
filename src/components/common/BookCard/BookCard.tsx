import { useEffect, useState } from "react";
import styles from "./BookCard.module.css";

interface BookCardProps {
  bookId: number;
  bookCoverSrc: string;
  bookCoverAlt: string;
  bookName: string;
  bookIds: string[];
  onBookIdsChange: React.Dispatch<React.SetStateAction<string[]>>;
}

const BookCard = ({
  bookCoverSrc,
  bookCoverAlt,
  bookName,
  bookId,
  onBookIdsChange,
  bookIds,
}: BookCardProps) => {
  const [favorite, setFavorite] = useState(
    bookIds.some((value) => value == bookId)
  );

  const handleBookAdd = () => {
    onBookIdsChange((prev) => [...prev, bookId.toString()]);
  };

  const handleBookRemove = () => {
    onBookIdsChange((prev) => prev.filter((id) => id !== bookId.toString()));
  };

  const handleButtonClick = () => {
    favorite ? handleBookRemove() : handleBookAdd();
    setFavorite(!favorite);
  };

  return (
    <div className={styles.div}>
      <img className={styles.img} src={bookCoverSrc} alt={bookCoverAlt} />
      <p className={styles.p}>{bookName}</p>
      <button className={styles.btn} onClick={handleButtonClick}>
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
