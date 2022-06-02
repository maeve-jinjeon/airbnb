import { useContext } from "react";
import { ModalContext } from "Context";
import { StyledModal, StyledModalWrapper } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";
import PriceDetail from "./PriceDetail/PriceDetail";
import CalendarDetail from "./CalendarDetail/CalendarDetail";

const Modal = () => {
	const modal = useContext(ModalContext);
	const details = {
		guest: <GuestsDetail />,
		price: <PriceDetail />,
		schedule: <CalendarDetail />,
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
