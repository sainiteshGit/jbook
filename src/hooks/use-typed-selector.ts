import { useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
