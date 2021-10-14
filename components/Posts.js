import Post from "./Post";

const posts = [
	{
		id: 123,
		username: "xxJonakAdiptaxx",
		userImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
		img: "https://avatars.githubusercontent.com/u/70377522?v=4",
		caption: "LIKE AND SUBSCRIBE!! AND JOIN THE LIGHTNING FAMILY!!"
	},
	{
		id: 123,
		username: "xxJonakAdiptaxx",
		userImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
		img: "https://avatars.githubusercontent.com/u/70377522?v=4",
		caption: "LIKE AND SUBSCRIBE!! AND JOIN THE LIGHTNING FAMILY!!"
	},
	{
		id: 123,
		username: "xxJonakAdiptaxx",
		userImg: "https://avatars.githubusercontent.com/u/70377522?v=4",
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
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
};

export default Posts;
