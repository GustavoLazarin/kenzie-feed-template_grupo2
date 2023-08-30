import { Link } from "react-router-dom";

export const NewsCard = ({ post }) => {
  return (
    <li className="stack-large">
      <img src={post.image} alt={post.title} />
      <div className="stack-medium">
        <span className="author">Por: {post.owner}</span>
        <h3 className="post-title">{post.title}</h3>
		<div>

        <Link className="btn__tertiary" to={`/news/${post.id}`}>
          Leia mais
        </Link>
		</div>
      </div>
    </li>
  );
};
