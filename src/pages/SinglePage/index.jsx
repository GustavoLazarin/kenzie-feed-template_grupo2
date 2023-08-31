import { useEffect } from "react";
import { NewsList } from "../../components/NewsList";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
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
			<main className="stack-2x-large">
				<article className="padding-i-24 stack-large overall-max-width">
					<div className="grid">

					<span className="min-w-full text-align-center">Por: {singlePost.owner}</span>
					<h1 className="heading-3">{singlePost.title}</h1>
					</div>
					<img src={singlePost.image} alt="" />
					<div className="flex  align-items-center like-gap">
            {likeId ? 
             <RxHeartFilled className="liked" onClick={() => unlikePost(likeId)} size={22}/> 
               : <RxHeart className="color-blue" onClick={() => likePost(id)} size={22}/> }
						
						{singlePost.likes?.length === 0 ? (
							"Seja o primeiro a curtir esse post"
						) : (
							<span>
								{singlePost.likes?.length}
								{singlePost.likes?.length > 1 ? " Curtidas" : " Curtida"}
							</span>
						)}
					</div>
					<p className="paragraph-large">{singlePost.description}</p>
				</article>
				<section className="padding-i-24 min-w-full stack-large">
					<h2 className="post-title">Leia também</h2>
					<NewsList newPosts={newPosts} />
				</section>
			</main>
		</>
	);
};
