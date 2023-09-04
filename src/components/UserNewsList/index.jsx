import { useNewsContext } from "../../providers/NewsContext";
import { UserNewsCard } from "./UserNewsCard";

export const UserNewsList = () => {
  const { ownPosts } = useNewsContext();
  const user = JSON.parse(localStorage.getItem("@USER"));


  return (
    <ul className="padding-b-32 w-full overall-max-width grid align-items-center justify-items-center news-gap">
      {ownPosts.length > 0 ? (
        ownPosts.map((post) => <UserNewsCard key={post.id} post={post} />)
      ) : (
        <li className="heading-3">Que tal fazer seu primeiro post, {user.name}? </li>
      )}
    </ul>
  );
};
