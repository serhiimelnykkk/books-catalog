interface BookCardProps {
  bookCoverSrc: string;
  bookCoverAlt: string;
  bookName: string;
}

const BookCard = ({ bookCoverSrc, bookCoverAlt, bookName }: BookCardProps) => {
  return (
    <div>
      <img src={bookCoverSrc} alt={bookCoverAlt} />
      <p>{bookName}</p>
    </div>
  );
};

export default BookCard;
