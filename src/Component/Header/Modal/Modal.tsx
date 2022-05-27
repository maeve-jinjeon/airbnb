import { StyledModal, StyledModalWrapper } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";

const modalState = "guest"; // 추후 state로 다시 설정

const Modal = () => {
	return (
		<StyledModalWrapper>
			<StyledModal modalState={modalState}>
				<GuestsDetail />
			</StyledModal>
		</StyledModalWrapper>
	);
};

export default Modal;
