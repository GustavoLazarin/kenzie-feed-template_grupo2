import { Footer } from "../../components/Footer";
import { NewsList } from "../../components/NewsList";
import { Header } from "../../components/header";

export const SinglePage = () => {
	return (
		<>
			<Header />
			<main>
				<article>
					<span>Por: </span>
					<h2></h2>
					<img src="" alt="" />
					<div>
						<button></button>
					</div>
					<p></p>
				</article>
				<h1>Leia também</h1>
				<NewsList />
			</main>
			<Footer />
		</>
	);
};
