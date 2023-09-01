import { NewsList } from "../../components/NewsList";
import { useNewsContext } from "../../providers/NewsContext";

export const AllNewsPage = () => {
  const { posts } = useNewsContext();

  return (
    <>
      <main>
        <div className="stack-large overall-max-width">
          <h1 className="heading-2">Todas as notícias</h1>
          <NewsList newPosts={posts} />
        </div>
      </main>
    </>
  );
};
