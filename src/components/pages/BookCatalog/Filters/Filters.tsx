import { GENRES } from "../../../../types";
import type { UseFormRegister, UseFormReset } from "react-hook-form";
import type { Book } from "../../../../types";
import styles from "./Filters.module.css";

interface FiltersProps {
  register: UseFormRegister<Book>;
  reset: UseFormReset<Book>;
}

const Filters = ({ register, reset }: FiltersProps) => {
  return (
    <form className={styles.filters_form}>
      <h4>Filters</h4>
      <label htmlFor="name">Name</label>
      <input
        className={styles.input_text}
        type="text"
        placeholder="...The Great Gatsby"
        {...register("name")}
      />
      <label htmlFor="author">Author</label>
      <input
        className={styles.input_text}
        type="text"
        placeholder="...George Orwell"
        {...register("author")}
      />
      <label htmlFor="year_published">Year published</label>
      <input
        className={styles.input_text}
        type="text"
        placeholder="...1905"
        {...register("year_published", { valueAsNumber: true })}
      />
      <label htmlFor="genres">Genres</label>
      <section className={styles.genres_wrapper}>
        {GENRES.map((genre) => (
          <label key={genre} className={styles.genre_label}>
            <input
              type="checkbox"
              key={genre}
              {...register("genres")}
              value={genre}
            />
            {genre}
          </label>
        ))}
      </section>
      <button
        className={styles.reset_btn}
        onClick={() => reset()}
        type="button"
      >
        Reset filters
      </button>
    </form>
  );
};

export default Filters;
