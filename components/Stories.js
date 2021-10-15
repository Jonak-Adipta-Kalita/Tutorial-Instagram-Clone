import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
	const { data: session } = useSession();
	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		const _suggestions = [...Array(50)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		
		setSuggestions(_suggestions);
	}, []);
	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			<Story
				img={session?.user?.image}
				username={session?.user?.username}
			/>
			{suggestions.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	);
};

export default Stories;
