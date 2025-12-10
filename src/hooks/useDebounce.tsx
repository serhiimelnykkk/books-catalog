import { useEffect, useState } from "react";

interface UseDebounce {
  <T>(value: T, delay: number): T;
}

const useDebounce: UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
