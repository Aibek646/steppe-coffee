import { useEffect, useState } from "react";

export function useAutoIndex(length, delay = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return index;
}
