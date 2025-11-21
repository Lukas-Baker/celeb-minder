import { createContext } from "react";
import type { ICelebration } from "../types/ICelebration";

type CelebrationState = {
    isEdit: boolean;
    setToEditMode: (celebration: ICelebration) => void;
    setToCreateMode: () => void;
}

function throwNoProviderError() {
    throw new Error("Function of a context was called outside of provider");
}

const celebrationStateContext = createContext<CelebrationState>({
    isEdit: false,
    setToEditMode: () => throwNoProviderError(),
    setToCreateMode: () => throwNoProviderError(),
});

export default celebrationStateContext;
