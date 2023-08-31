import { Link } from "react-router-dom";
import { useNewsContext } from "../../../providers/NewsContext";

export const NewsCard = ({ post }) => {
	const { setSinglePost } = useNewsContext();

	return (
		<li className="stack-large w-full">
			<img className="w-full" src={post.image} alt={post.title} />
			<div className="stack-medium">
				<span className="author">Por: {post.owner}</span>
				<h3 className="post-title">{post.title}</h3>
				<div>
					<Link
						to={`/news/${post.id}`}
						onClick={() => {
							setSinglePost(post);
							window.scrollTo(0, 0);
						}}>
						Leia mais
					</Link>
				</div>
			</div>
		</li>
	);
};
