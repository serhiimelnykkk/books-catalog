import { useEffect, useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(
    JSON.parse(localStorage.getItem("bookIds") || "[]")
  );

  useEffect(() => {
    const newBookIds = JSON.stringify(favorites);
    localStorage.setItem("bookIds", newBookIds);
  }, [favorites]);

  const toggleFavorite = (bookId: number) => {
    setFavorites((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
