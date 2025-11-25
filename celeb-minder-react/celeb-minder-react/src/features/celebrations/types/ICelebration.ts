import { CelebrationType } from "./CelebrationTypeEnum";
import { Repeat } from "./RepeatEnum";

export interface ICelebration {
    Id: number;
    Who: string;
    CelebrationType: number | null;
    When: Date;
    Repeat: number;
    Note?: string;
}

const DefaultCelebration: ICelebration = {
    Id: 0,
    Who: "",
    CelebrationType: CelebrationType.Default,
    When: new Date(),
    Repeat: Repeat.Never,
    Note: ""
};

export {DefaultCelebration};
