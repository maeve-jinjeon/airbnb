import { createContext, ReactNode, useCallback, useState } from "react";

type modalType = "guest" | "price" | "schedule" | "empty";
type checkModalType = (modalState: modalType) => void;

const defaultModal: modalType = "empty";
const ModalContext = createContext<modalType>(defaultModal);
const CheckModalContext = createContext<checkModalType>(() => null);

const ModalProvider = ({ inner }: { inner: ReactNode }) => {
	const [modal, setModal] = useState<modalType>(defaultModal);

	const checkModal = useCallback(
		(modalState: modalType) => {
			const newModalState = modal === modalState ? defaultModal : modalState;
			setModal(newModalState);
		},
		[modal]
	);

	return (
		<ModalContext.Provider value={modal}>
			<CheckModalContext.Provider value={checkModal}>{inner}</CheckModalContext.Provider>
		</ModalContext.Provider>
	);
};

export { ModalProvider, ModalContext, CheckModalContext };
export type { modalType, checkModalType };
