import { ReactNode } from "react";

import { ModalProvider, ModalContext, CheckModalContext } from "./modalContext";
import { GuestsProvider, GuestsContext, GuestsDispatchContext } from "./GuestsContext";
import { PriceContext, PriceDispatchContext, PriceProvider } from "./PriceContext";
import { ScheduleProvider, ScheduleContext, SetScheduleContext } from "./ScheduleContext";

type providerProp = { children: ReactNode };

const providers = [ModalProvider, GuestsProvider, PriceProvider, ScheduleProvider];

const ContextsProvider = ({ children }: providerProp) =>
	providers.reduce((prev, Provider) => <Provider>{prev}</Provider>, children);

export {
	ModalContext,
	CheckModalContext,
	GuestsContext,
	GuestsDispatchContext,
	PriceContext,
	PriceDispatchContext,
	ScheduleContext,
	SetScheduleContext,
	ContextsProvider,
};
