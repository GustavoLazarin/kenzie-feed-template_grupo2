import { useEffect } from "react";

export const useKeyDown = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key) {
        e.preventDefault();

        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
