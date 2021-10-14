import { useState, useEffect } from "react";
import Suggestion from "./Suggestion";
import faker from "faker";

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);
	
	useEffect(() => {
		const _suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		
		setSuggestions(_suggestions);
	}, []);
	
	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for You!!</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>
			{suggestions.map((profile) => (
				<Suggestion
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
					company={profile.company}
				/>
			))}
		</div>
	);
};

export default Suggestions;
