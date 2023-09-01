import { useEffect, useRef } from "react";

export const useOutClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOut = (e) => {
      if (e.target.contains(ref.current)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOut);

    return () => {
      window.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return ref;
};
