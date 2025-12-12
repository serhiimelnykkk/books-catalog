import { GENRES } from "../../../../types";
import type { UseFormRegister } from "react-hook-form";
import type { Book } from "../../../../types";

interface FiltersProps {
  register: UseFormRegister<Book>;
}

const Filters = ({ register }: FiltersProps) => {
  return (
    <form>
      <input type="text" placeholder="book name" {...register("name")} />
      <input type="text" placeholder="book author" {...register("author")} />
      <input
        type="text"
        placeholder="book year published"
        {...register("year_published", { valueAsNumber: true })}
      />
      <select multiple {...register("genres")}>
        {GENRES.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>
    </form>
  );
};

export default Filters;
