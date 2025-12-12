import type { Book } from "../../../types";

type FilterFunction = (book: Book, filterValues: Book) => boolean;

const filters: Partial<Record<keyof Book, FilterFunction>> = {
  name: (book, filterValues) =>
    book.name
      .trim()
      .toLowerCase()
      .includes(filterValues.name.trim().toLowerCase()),

  author: (book, filterValues) =>
    book.author
      .trim()
      .toLowerCase()
      .includes(filterValues.author.trim().toLowerCase()),

  year_published: (book, filterValues) => {
    if (
      !filterValues.year_published ||
      Number.isNaN(filterValues.year_published)
    ) {
      return true;
    }
    return book.year_published === filterValues.year_published;
  },

  genres: (book, filterValues) =>
    filterValues.genres.every((genre) => book.genres.includes(genre)),
};

export default filters;
