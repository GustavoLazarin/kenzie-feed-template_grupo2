import { NewsList } from "../../components/NewsList";
import { useDocTitle } from "../../hooks/useDocTitle"
import { Skeleton } from "../../components/Skeleton";
import { useNewsContext } from "../../providers/NewsContext";

export const AllNewsPage = () => {
  const { posts, isLoading } = useNewsContext();
  useDocTitle("Todas as notícias");

  return (
    <>
      {isLoading ? <Skeleton/> : (
        <main>
          <div className="stack-large overall-max-width">
            <h1 className="heading-2">Todas as notícias</h1>
            <NewsList newPosts={posts} />
          </div>
        </main>
      )}
    </>
  );
};

