import { useEffect } from "react";
import { NewsList } from "../../components/NewsList";
import { useNavigate, useParams } from "react-router-dom";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { useNewsContext } from "../../providers/NewsContext";
import { NewsArticleSkeleton } from "../../components/skeletons/NewsArticleSkeleton";

export const SinglePage = () => {
    const { id } = useParams();
    const {
        singlePost,
        likePost,
        likeId,
        unlikePost,
        posts,
        getAllPosts,
        getPostById,
        isLoading,
        isLiking
    } = useNewsContext();

    useEffect(() => {
        getAllPosts();
    }, []);

    let amountPosts = 0;
    const newPosts = posts.filter((post) => {
        if (post.id !== singlePost.id && amountPosts < 2) {
            amountPosts++;
            return post;
        }
    });

    useEffect(() => {
        getPostById(id);
    }, [id]);

    return (
        <>
            <main className="content">
                {isLoading ? (
                    <NewsArticleSkeleton />
                ) : (
                    <article className="stack-large current-news">
                        <div className="grid">
                            <span className="min-w-full text-align-center">
                                Por: {singlePost.owner}
                            </span>
                            <h1 className="text-align-center heading-3">
                                {singlePost.title}
                            </h1>
                        </div>
                        <img className="w-full" src={singlePost.image} alt="" />
                        <div className="flex like-gap">
                            {likeId ? (
                                <button disabled={isLiking}>
                                    <RxHeartFilled
                                        className="liked"
                                        onClick={() => unlikePost(likeId)}
                                        size={22}
                                        />
                                </button>
                            ) : (
                                <button disabled={isLiking}>
                                    <RxHeart
                                        className="color-blue unliked"
                                        onClick={() => likePost(id)}
                                        size={22}
                                    />
                                </button>
                            )}

                            {singlePost.likes?.length === 0 ? (
                                "Seja o primeiro a curtir esse post"
                            ) : (
                                <span>
                                    {singlePost.likes?.length}
                                    {singlePost.likes?.length > 1
                                        ? " Curtidas"
                                        : " Curtida"}
                                </span>
                            )}
                        </div>
                        <p className="paragraph-large">
                            {singlePost.description}
                        </p>
                    </article>
                )}
                <section className="read-too min-w-full stack-large">
                    <h2 className="post-title">Leia também</h2>
                    <NewsList newPosts={newPosts} />
                </section>
            </main>
        </>
    );
};
