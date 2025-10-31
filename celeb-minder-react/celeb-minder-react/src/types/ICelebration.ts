import type { CelebrationType } from "./CelebrationTypeEnum";
import type { Repeat } from "./RepeatEnum";

export interface ICelebration {
    Id: number;
    Who: string;
    CelebrationType: CelebrationType;
    When: Date;
    Repeat: Repeat;
    Note?: string;
}
