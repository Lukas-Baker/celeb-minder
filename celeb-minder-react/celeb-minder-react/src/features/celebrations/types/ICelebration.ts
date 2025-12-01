export interface ICelebration {
    Id: number;
    Who: string;
    CelebrationType: number | null;
    When: Date|null;
    Repeat: number | null;
    Note?: string;
}

const DefaultCelebration: ICelebration = {
    Id: 0,
    Who: "",
    CelebrationType: null,
    When: null,
    Repeat: null,
    Note: ""
};

export {DefaultCelebration};
