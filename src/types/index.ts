export type Genre =
  | "Classics"
  | "Fiction"
  | "Science Fiction"
  | "Historical Fiction"
  | "Dystopia"
  | "Politics"
  | "Romance"
  | "Fantasy";

export interface Book {
  id: number;
  name: string;
  author: string;
  year_published: number;
  genres: Genre[];

  coverPath: string;
}
