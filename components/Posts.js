import Post from "./Post";

const posts = [
	{
		id: 0,
		username: "xxJonakAdiptaxx",
		profileImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
		img: "https://avatars.githubusercontent.com/u/70377522?v=4",
		caption: "LIKE AND SUBSCRIBE!! AND JOIN THE LIGHTNING FAMILY!!"
	},
	{
		id: 2,
		username: "xxJonakAdiptaxx",
		profileImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
		img: "https://avatars.githubusercontent.com/u/70377522?v=4",
		caption: "LIKE AND SUBSCRIBE!! AND JOIN THE LIGHTNING FAMILY!!"
	},
	{
		id: 3,
		username: "xxJonakAdiptaxx",
		profileImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
		img: "https://avatars.githubusercontent.com/u/70377522?v=4",
		caption: "LIKE AND SUBSCRIBE!! AND JOIN THE LIGHTNING FAMILY!!"
	},
];

const Posts = () => {
	return (
		<div className="">
			{posts.map((post) => (
				<Post
					key={post.id}
					username={post.username}
					userImg={post.profileImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
};

export default Posts;
