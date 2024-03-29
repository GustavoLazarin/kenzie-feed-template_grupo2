import { NewsList } from "../../components/NewsList";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useNewsContext } from "../../providers/NewsContext";
import { useEffect } from "react";

export const AllNewsPage = () => {
    const { posts, isLoading, getAllPosts } = useNewsContext();
    useDocTitle("Todas as notícias");

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <main className="content">
                <div className="w-full stack-large overall-max-width">
                    <h1 className="heading-2">Todas as notícias</h1>
                    <NewsList newPosts={posts} />
                </div>
            </main>
        </>
    );
};
