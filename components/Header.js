import { useRouter } from "next/router";
import Image from "next/image";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
	const router = useRouter();
	const avatar = "https://avatars.githubusercontent.com/u/70377522?v=4";
	return (
		<div className="shadow-md border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
				<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
					<Image
						layout="fill"
						src="https://links.papareact.com/ocw"
						objectFit="contain"
						onClick={() => router.push("/")}
					/>
				</div>
				<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						layout="fill"
						src="https://links.papareact.com/jjm"
						objectFit="contain"
						onClick={() => router.push("/")}
					/>
				</div>
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center">
							<SearchIcon
								className="h-5 w-5 text-gray-500 cursor-pointer"
							/>
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>
				<div className="flex items-center justify-end space-x-4">
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					<HomeIcon className="navBtn" />
					<div className="relative navBtn group">
						<PaperAirplaneIcon
							className="navBtn group-hover:rotate-45"
						/>
						<div className="absolute -top-3 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
							69
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<img
						src={avatar}
						alt="user-avatar"
						onClick={() => {}}
						className="h-10 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
