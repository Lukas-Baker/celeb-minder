import { createContext } from "react";
import type { ICelebrationState } from "../types/ICelebrationState";

export const CelebrationContext = createContext<ICelebrationState | null>(null);
