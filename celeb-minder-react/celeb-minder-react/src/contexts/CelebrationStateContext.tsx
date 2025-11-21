import { createContext } from "react";
import type { ICelebration } from "../types/ICelebration";

type CelebrationState = {
    isEdit: boolean;
    setToEditMode: (celebration: ICelebration) => void;
    setToCreateMode: () => void;
}

const celebrationStateContext = createContext<CelebrationState>({
    isEdit: false,
    setToEditMode: () => {
        throw new Error("setToEditMode called outside of Provider");
    },
    setToCreateMode: () => {
        throw new Error("setToEditMode called outside of Provider");
    }
});

export default celebrationStateContext;
