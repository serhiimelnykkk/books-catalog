import { GENRES } from "../../../../types";
import type { UseFormRegister, UseFormReset } from "react-hook-form";
import type { Book } from "../../../../types";
import styles from "./Filters.module.css";
import Button from "../../../common/Button/Button";
import InputText from "../../../common/InputText/InputText";

interface FiltersProps {
  register: UseFormRegister<Book>;
  reset: UseFormReset<Book>;
  onClose: (...args: unknown[]) => unknown;
  isCloseButtonVisible: boolean;
}

const Filters = ({
  register,
  reset,
  onClose,
  isCloseButtonVisible,
}: FiltersProps) => {
  return (
    <form className={styles.filters_form}>
      <div className={styles.filter_title_wrapper}>
        <h4>Filters</h4>
        <Button
          variant="secondary"
          onClick={onClose}
          hidden={isCloseButtonVisible}
          type="button"
        >
          Close
        </Button>
      </div>
      <Button onClick={() => reset()} type="button">
        Reset filters
      </Button>
      <label htmlFor="name">Name</label>
      <InputText
        className={styles.input_text}
        type="text"
        placeholder="...The Great Gatsby"
        {...register("name")}
      />
      <label htmlFor="author">Author</label>
      <InputText
        className={styles.input_text}
        type="text"
        placeholder="...George Orwell"
        {...register("author")}
      />
      <label htmlFor="year_published">Year published</label>
      <InputText
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
    </form>
  );
};

export default Filters;
