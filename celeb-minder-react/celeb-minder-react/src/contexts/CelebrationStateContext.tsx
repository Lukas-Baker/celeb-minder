import { createContext } from "react";

type CelebrationState = {
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const celebrationStateContext = createContext<CelebrationState>({
    isEdit: false,
    setIsEdit: () => {
        throw new Error("setIsEdit called outside of Provider");
    }
});

export default celebrationStateContext;
