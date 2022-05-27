import { useContext } from "react";
import { ModalContext } from "Context/modalContext";
import { StyledModal, StyledModalWrapper } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";

const Modal = () => {
	const modal = useContext(ModalContext);
	const details = {
		guest: <GuestsDetail />,
		price: null,
		schedule: null,
		empty: null,
	};
	const ModalDetail = details[modal];

	return (
		<StyledModalWrapper>
			<StyledModal modal={modal}>{ModalDetail}</StyledModal>
		</StyledModalWrapper>
	);
};

export default Modal;
