import { useSession } from "next-auth/react";
import { HomeIcon } from "@heroicons/react/solid";
import {
	SearchIcon,
	HeartIcon,
	PlayIcon as ReelsIcon,
} from "@heroicons/react/outline";

const Footer = () => {
	const { data: session } = useSession();

	return (
		<footer className="flex sticky bottom-0 z-50 md:hidden justify-between px-4 py-[5px] border-t bg-white shadow-lg">
			<HomeIcon className="footerBtn" />
			<SearchIcon className="footerBtn" />
			<ReelsIcon className="footerBtn" />
			<HeartIcon className="footerBtn" />
			<img
				src={session?.user?.image}
				alt="user-avatar"
				className="footerBtn rounded-full"
			/>
		</footer>
	);
};

export default Footer;
