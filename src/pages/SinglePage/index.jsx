import { useEffect } from "react";
import { NewsList } from "../../components/NewsList";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { RxHeart } from "react-icons/rx";
import { useNewsContext } from "../../providers/NewsContext";


export const SinglePage = () => {
	const { id } = useParams();
	const { singlePost, setSinglePost } = useNewsContext();

	let amountPosts = 0;
	const { posts } = useNewsContext();
	const newPosts = posts.filter(post => {
		if (post.id !== singlePost.id && amountPosts < 2) {
			amountPosts++;
			return post;
		}
	});

	useEffect(() => {
		const getPostById = async () => {
			try {
				const { data } = await api.get(`posts/${id}?_embed=likes`);
				setSinglePost(data);
			} catch (error) {
				// Navigate('/notFound');
			}
		};

		getPostById();
	}, []);

	return (
		<>
			<main>
				<article>
					<span>Por: {singlePost.owner}</span>
					<h2>{singlePost.title}</h2>
					<img src={singlePost.image} alt="" />
					<div>
						<RxHeart />
						{singlePost.likes?.length === 0 ? (
							"Seja o primeiro a curtir esse post"
						) : (
							<span>
								{singlePost.likes?.length}
								{singlePost.likes?.length > 1 ? " Curtidas" : " Curtida"}
							</span>
						)}
					</div>
					<p>{singlePost.description}</p>
				</article>
				<section>
					<h1>Leia também</h1>
					<NewsList newPosts={newPosts} />
				</section>
			</main>
		</>
	);
};
