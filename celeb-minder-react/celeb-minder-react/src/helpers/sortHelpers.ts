import type { ICelebration } from "../types/ICelebration";

export function sortCelebrationsByDate(celebrations: ICelebration[]): ICelebration[] {
    return celebrations.sort((a, b) => a.When.getTime() - b.When.getTime());
}
