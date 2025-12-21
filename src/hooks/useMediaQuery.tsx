import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [isMatches, setIsMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => {
      setIsMatches(matchMedia.matches);
    };

    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return isMatches;
};

export default useMediaQuery;
