import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useDebounce from "../../../hooks/useDebounce";
import temporaryStorage from "../../../storage/temp";
import { type Book } from "../../../types";
import BookCard from "../../common/BookCard/BookCard";
import styles from "./BookCatalog.module.css";
import filters from "./filters";
import useFavorites from "./hooks/useFavorites";
import Filters from "./Filters/Filters";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Button from "../../common/Button/Button";

interface BookCatalogProps {
  showFavoritesOnly?: boolean;
}

const BookCatalog = ({ showFavoritesOnly }: BookCatalogProps) => {
  const { favorites, toggleFavorite } = useFavorites();

  const books = showFavoritesOnly
    ? temporaryStorage.filter((book) => favorites.includes(book.id))
    : temporaryStorage;

  const { register, watch, reset } = useForm<Book>({
    defaultValues: {
      genres: [],
    },
  });

  const filterValues = watch();

  const debouncedJson = useDebounce(JSON.stringify(filterValues), 500);

  const filteredBooks = useMemo(() => {
    const debouncedFilterValues = JSON.parse(debouncedJson);

    return books.filter((book) =>
      Object.keys(debouncedFilterValues).every((key) => {
        const filterKey = key as keyof Book;

        const filter = filters[filterKey];

        if (!filter) {
          return true;
        }

        return filter(book, debouncedFilterValues);
      })
    );
  }, [debouncedJson, books]);

  const isMobile = useMediaQuery("(width <= 1024px)");

  const [areMobileFiltersVisible, setAreFiltersVisible] = useState(false);

  useEffect(() => {
    setAreFiltersVisible(false);
  }, [isMobile]);

  return (
    <main className={styles.catalog_wrapper}>
      {(!isMobile || areMobileFiltersVisible) && (
        <div
          className={`${styles.filters_wrapper}
            ${areMobileFiltersVisible ? styles.filters_wrapper_mobile : ""}
              `}
        >
          <Filters register={register} reset={reset} />
        </div>
      )}

      {filteredBooks.length > 0 ? (
        <div className={styles.wrapper_main}>
          {isMobile && (
            <nav className={styles.mobile_filters_navbar}>
              <Button
                onClick={() => setAreFiltersVisible(!areMobileFiltersVisible)}
              >
                Filters
              </Button>
            </nav>
          )}
          <section className={styles.book_catalog}>
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favorites.includes(book.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className={styles.wrapper_empty}>
          {showFavoritesOnly ? (
            <p className={styles.message_empty}>
              No books here. Return to{" "}
              <Link to="/" className={styles.return_to_catalog}>
                catalog
              </Link>{" "}
              to add some
            </p>
          ) : (
            <p className={styles.message_empty}>No books available</p>
          )}
        </div>
      )}
    </main>
  );
};

export default BookCatalog;
