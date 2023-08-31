import { Link } from "react-router-dom"
import { useNewsContext } from "../../../providers/NewsContext"

export const NewsCard = ({ post }) => {
    const { setSinglePost } = useNewsContext()

    return (
        <li className="stack-large w-full">
            <div className="post-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="stack-medium grid">
                <span className="author">Por: {post.owner}</span>
                <h3 className="post-title">{post.title}</h3>
                <div>
                    <Link
                        className="btn__tertiary"
                        to={`/news/${post.id}`}
                        onClick={() => setSinglePost(post)}
                    >
                        Leia mais
                    </Link>
                </div>
            </div>
        </li>
    )
}
