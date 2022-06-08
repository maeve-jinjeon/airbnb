import { useContext } from "react";
import { ModalContext, CheckModalContext } from "Context";
import { StyledModal, StyledModalWrapper, Background } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";
import PriceDetail from "./PriceDetail/PriceDetail";
import CalendarDetail from "./CalendarDetail/CalendarDetail";
import ModalPortal from "./Portal";

const Modal = () => {
	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);
	const details = {
		guest: <GuestsDetail />,
		price: <PriceDetail />,
		checkin: <CalendarDetail />,
		checkout: <CalendarDetail />,
		empty: null,
	};
	const ModalDetail = details[modal];

	const handleModalPopup = () => {
		if (modal !== "empty") checkModal("empty");
	};

	// TODO: ModalPortal으로 감싸니까 모달 사이즈가 padding만큼 더 커짐
	return (
		<ModalPortal>
			<Background onClick={handleModalPopup}>
				<StyledModalWrapper>
					<StyledModal modal={modal}>{ModalDetail}</StyledModal>
				</StyledModalWrapper>
			</Background>
		</ModalPortal>
	);
};

export default Modal;
