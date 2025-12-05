import { useParams } from "react-router";
import temporaryStorage from "../../../storage/temp";
import NotFound from "../NotFound/NotFound";

const Book = () => {
  const { id } = useParams();

  if (id == null) {
    return <NotFound />;
  }

  const parsedId = parseInt(id);
  const book = temporaryStorage.find((book) => book.id === parsedId);

  if (book == null) {
    return <NotFound />;
  }

  return (
    <article>
      <img src={book.coverPath} alt={book.name} />
      <h1>{book.name}</h1>
      <p>
        {book.author} &middot; {book.year_published}
      </p>
      <section>
        {book.genres
          .sort((a, b) => a.localeCompare(b))
          .map((genre) => (
            <> {genre} </>
          ))}
      </section>
    </article>
  );
};

export default Book;
