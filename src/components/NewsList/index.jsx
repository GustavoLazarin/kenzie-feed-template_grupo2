import { useLocation } from "react-router-dom";
import { useNewsContext } from "../../providers/NewsContext";
import { NewsCardSkeleton } from "../skeletons/NewsCardSkeleton";
import { NewsCard } from "./NewsCard";

export const NewsList = ({ newPosts }) => {
    const { isLoading } = useNewsContext();

    const loc = useLocation();

    return (
        <ul className="w-full grid grid-news justify-items-center news-gap">
            {isLoading ? (
                <>
                    <NewsCardSkeleton />
                    <NewsCardSkeleton />
                    {loc.pathname === "/" || "/news" ? (
                        <>
                            <NewsCardSkeleton />
                            <NewsCardSkeleton />
                        </>
                    ) : null}
                </>
            ) : (
                newPosts.map((post) => <NewsCard key={post.id} post={post} />)
            )}
        </ul>
    );
};
