import { useContext } from "react";
import { ModalContext } from "Context";
import { StyledModal, StyledModalWrapper, Background } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";
import PriceDetail from "./PriceDetail/PriceDetail";
import CalendarDetail from "./CalendarDetail/CalendarDetail";

const Modal = () => {
	const modal = useContext(ModalContext);
	const details = {
		guest: <GuestsDetail />,
		price: <PriceDetail />,
		checkin: <CalendarDetail />,
		checkout: <CalendarDetail />,
		empty: null,
	};
	const ModalDetail = details[modal];

	return (
		<Background>
			<StyledModalWrapper>
				<StyledModal modal={modal}>{ModalDetail}</StyledModal>
			</StyledModalWrapper>
		</Background>
	);
};

export default Modal;
