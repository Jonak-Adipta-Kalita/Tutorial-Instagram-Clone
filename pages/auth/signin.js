import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }) => {
	console.log(providers)
	return (
		<div className="">
			<Head>
				<title>JAK Instagram Clone</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button onClick={() => signIn(provider.id)}>
						Sign in with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
};

export async function getServerSideProps(context) {
	const providers = await getProviders();
	
	return {
		props: {
			providers
		}
	};
}

export default SignIn;
