import type { ICelebration } from "./ICelebration";

export interface ICelebrationFormData {
    celebration: ICelebration,
    isValid: boolean,
    setCelebrationToForm: (celebration: ICelebration) => void;
}
