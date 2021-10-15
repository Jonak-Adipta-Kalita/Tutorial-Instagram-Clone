import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
	const [open, setOpen] = useRecoilState(modalState);
	return (
		<div className="">
			{open && (
				<div className="">
					
				</div>
			)}
		</div>
	);
};

export default Modal;
