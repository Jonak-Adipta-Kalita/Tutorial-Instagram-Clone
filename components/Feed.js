import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Feed = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 lg:max-w-6xl mx-auto px-5 md:-px-5">
			<section className="col-span-2">
				<Stories />
				<Posts />
			</section>
			<section className="">
				<MiniProfile />
				<Suggestions />
			</section>
		</main>
	);
};

export default Feed;
