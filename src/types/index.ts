export const GENRES = [
  "Classics",
  "Fiction",
  "Science Fiction",
  "Historical Fiction",
  "Dystopia",
  "Politics",
  "Romance",
  "Fantasy",
] as const;

export type Genre = (typeof GENRES)[number];

export interface Book {
  id: number;
  name: string;
  author: string;
  year_published: number;
  genres: Genre[];

  coverPath: string;
}
