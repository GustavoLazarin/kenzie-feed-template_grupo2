import { useEffect } from "react";

export const useDocTitle = (title) => {
  useEffect(() => {
    document.title = `kHub | ${title.charAt(0).toUpperCase() + title.slice(1)}`;
  }, []);
};
