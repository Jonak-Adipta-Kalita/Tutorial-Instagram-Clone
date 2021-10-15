import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";

const Home = () => {
	const { data: session } = useSession();

	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>JAK Instagram Clone</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />
			{session?.user ? (
				<>
					<Feed />
					<Footer />
				</>
			) : (
				<div className="md:max-w-3xl lg:max-w-6xl mx-auto px-5">
					{/* <h5 className="font-semibold text-lg">Sign In to Continue!!</h5> */}
				</div>
			)}
		</div>
	);
};

export default Home;
