import { useEffect } from "react";
import { NewsList } from "../../components/NewsList";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { RxHeart } from "react-icons/rx";
import { useNewsContext } from "../../providers/NewsContext";

export const SinglePage = () => {
	const { id } = useParams();
	const {
		singlePost,
		setSinglePost,
		likePost,
		likeId,
		unlikePost,
		setLikeId,
		posts,
		checkLikePost,
	} = useNewsContext();

	const userInfo = localStorage.getItem("@USER");

	let amountPosts = 0;
	const newPosts = posts.filter(post => {
		if (post.id !== singlePost.id && amountPosts < 2) {
			amountPosts++;
			return post;
		}
	});

	useEffect(() => {
		// Quando o componente for montado, haverá uma requisição get por ID do post
		const getPostById = async () => {
			try {
				const { data } = await api.get(`posts/${id}?_embed=likes`);
				setSinglePost(data);
			} catch (error) {
				// Caso dê errado, a notícia não existe
				// Navigate('/notFound');
			}
		};

		getPostById();
	}, [id]);

	return (
		<>
			<main>
				<article>
					<span>Por: {singlePost.owner}</span>
					<h2>{singlePost.title}</h2>
					<img src={singlePost.image} alt="" />
					<div>
						<RxHeart
							onClick={() =>
								likeId === null ? likePost(id) : unlikePost(likeId)
							}
						/>
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
