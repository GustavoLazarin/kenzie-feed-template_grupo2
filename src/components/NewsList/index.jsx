import { NewsCard } from "./NewsCard";

export const NewsList = ({ newPosts }) => {
    return (
        <ul className="w-full grid grid-news justify-items-center news-gap">
            {newPosts.map((post) => (
                <NewsCard key={post.id} post={post} />
            ))}
        </ul>
    );
};
