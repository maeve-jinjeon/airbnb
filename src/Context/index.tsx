import { ReactNode } from "react";

import { ModalProvider, ModalContext, CheckModalContext } from "./modalContext";
import { GuestsProvider, GuestsContext, GuestsDispatchContext } from "./GuestsContext";
import { PriceContext, PriceDispatchContext, PriceProvider } from "./PriceContext";
import { ScheduleProvider, ScheduleContext, ScheduleDispatchContext } from "./ScheduleContext";

type providerProp = { children: ReactNode };

const providers = [ModalProvider, GuestsProvider, PriceProvider, ScheduleProvider];

const ContextsProvider = ({ children }: providerProp) => {
	const providersSum = providers.reduce((prev, Provider) => <Provider>{prev}</Provider>, children);
	return <div>{providersSum}</div>;
};

export {
	ModalContext,
	CheckModalContext,
	GuestsContext,
	GuestsDispatchContext,
	PriceContext,
	PriceDispatchContext,
	ScheduleContext,
	ScheduleDispatchContext,
	ContextsProvider,
};
