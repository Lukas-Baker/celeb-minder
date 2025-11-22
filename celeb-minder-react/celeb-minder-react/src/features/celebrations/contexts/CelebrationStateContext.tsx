import { createContext } from "react";
import type { ICelebration } from "../types/ICelebration";

type CelebrationContextInterface = {
    isEdit: boolean;
    loadCelebrationToForm: (celebration: ICelebration) => void;
    setToCreateMode: () => void;
    addCelebration: (newCelebration: ICelebration) => void;
    editCelebration: (editedCelebration: ICelebration) => void;
    deleteCelebration: (celebrationToDelete: ICelebration) => void;
}

function throwNoProviderError() {
    throw new Error("Function of a context was called outside of provider");
}

const celebrationStateContext = createContext<CelebrationContextInterface>({
    isEdit: false,
    loadCelebrationToForm: () => throwNoProviderError(),
    setToCreateMode: () => throwNoProviderError(),
    addCelebration: () => throwNoProviderError(),
    editCelebration: () => throwNoProviderError(),
    deleteCelebration: () => throwNoProviderError(),
});

export default celebrationStateContext;
