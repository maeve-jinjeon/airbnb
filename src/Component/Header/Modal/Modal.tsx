import { useContext } from "react";
import { ModalContext } from "Context";
import { StyledModal, StyledModalWrapper } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";
<<<<<<< HEAD
import PriceDetail from "./PriceDetail/PriceDetail";
import CalendarDetail from "./CalendarDetail/CalendarDetail";
=======
import PriceDetail from "./PriceDetail";
import CalendarDetail from "./CalendarDetail";
>>>>>>> 29b91d6 (feat : Detail 영역 생성 (#5))

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
		<StyledModalWrapper>
			<StyledModal modal={modal}>{ModalDetail}</StyledModal>
		</StyledModalWrapper>
	);
};

export default Modal;
