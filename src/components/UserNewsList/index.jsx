import { useNewsContext } from "../../providers/NewsContext";
import { UserNewsCard } from "./UserNewsCard";

export const UserNewsList = () => {
  const { ownPosts } = useNewsContext();

  return (
    <ul className="padding-b-32 w-full overall-max-width grid align-items-center justify-items-center news-gap">
      {ownPosts.map((post) => (
        <UserNewsCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
