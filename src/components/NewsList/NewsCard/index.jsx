import { Link } from 'react-router-dom';

export const NewsCard = ({ post }) => {
	return (
		<li>
			<img src={post.image} alt={post.title} />
			<span>Por: {post.owner}</span>
			<h3>{post.title}</h3>
			<Link to={`/news/${post.id}`}>Leia mais</Link>
		</li>
	);
};
