import { useState } from "react";
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ username, userImg, img, caption }) => {
	const [shouldTruncate, setShouldTruncate] = useState(true);
	const postComment = (e) => {
		e.preventDefault();
	};
	return (
		<div className="bg-white my-7 border rounded-sm">
			<div className="flex items-center p-5">
				<img
					className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"
					src={userImg}
					alt="profile-avatar"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5 cursor-pointer" />
			</div>
			<img
				className="object-cover w-full border-t-2"
				src={img}
				alt="post-pic"
			/>
			<div className="flex justify-between px-4 pt-4 border-t-2">
				<div className="flex space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45 h-6 -mt-[30px] hover:scale-160" />
				</div>
				<BookmarkIcon className="btn" />
			</div>
			<p
				className={`p-5 cursor-pointer break-all ${shouldTruncate && "truncate"}`}
				onClick={() => setShouldTruncate(!shouldTruncate)}
			>
				<span className="font-bold mr-1">
					{username}{" "}
				</span>
				{caption}
			</p>
			<form className="flex items-center p-4">
				<EmojiHappyIcon className="btn" />
				<input
					className="border-none flex-1 focus:ring-0 outline-none"
					type="text"
					placeholder="Add a Comment..."
				/>
				<button
					className="font-semibold text-blue-400"
					onClick={postComment}
				>
					Post
				</button>
			</form>
		</div>
	);
};

export default Post;
