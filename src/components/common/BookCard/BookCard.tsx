import styles from "./BookCard.module.css";

interface BookCardProps {
  bookCoverSrc: string;
  bookCoverAlt: string;
  bookName: string;
}

const BookCard = ({ bookCoverSrc, bookCoverAlt, bookName }: BookCardProps) => {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={bookCoverSrc} alt={bookCoverAlt} />
      <p className={styles.p}>{bookName}</p>
    </div>
  );
};

export default BookCard;
