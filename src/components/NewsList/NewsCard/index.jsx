import { Link } from "react-router-dom";
import { useNewsContext } from "../../../providers/NewsContext";

export const NewsCard = ({ post }) => {
	const { setSinglePost } = useNewsContext();

	return (
		<li>
			<img src={post.image} alt={post.title} />
			<span>Por: {post.owner}</span>
			<h3>{post.title}</h3>
			<Link to={`/news/${post.id}`} onClick={() => setSinglePost(post)}>
				Leia mais
			</Link>
		</li>
	);
};
