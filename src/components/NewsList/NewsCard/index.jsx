import { Link } from "react-router-dom";
import { useNewsContext } from "../../../providers/NewsContext";

export const NewsCard = ({ post }) => {
  const { setSinglePost } = useNewsContext();

  return (
    <li className="stack-large w-full grid-news-card">
      <div className="post-image">
        <img className="w-full obj-fit-cover" src={post.image} alt={post.title} />
      </div>
      <div className="stack-medium grid">
        <span className="author">Por: {post.owner}</span>
        <h3 className="post-title">{post.title}</h3>
        <div>
          <Link
            aria-label="full-post"
            title="Ler notícia na íntegra"
            className="btn__tertiary"
            to={`/news/${post.id}`}
            onClick={() => {
              setSinglePost(post);
              window.scrollTo(0, 0);
            }}
          >
            Leia mais
          </Link>
        </div>
      </div>
    </li>
  );
};
