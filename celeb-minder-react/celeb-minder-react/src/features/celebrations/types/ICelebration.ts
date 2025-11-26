export interface ICelebration {
    Id: number;
    Who: string;
    CelebrationType: number | null;
    When: Date;
    Repeat: number | null;
    Note?: string;
}

const DefaultCelebration: ICelebration = {
    Id: 0,
    Who: "",
    CelebrationType: null,
    When: new Date(),
    Repeat: null,
    Note: ""
};

export {DefaultCelebration};
