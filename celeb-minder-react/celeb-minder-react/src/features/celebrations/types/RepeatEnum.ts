export const Repeat = {
    Never: 1,
    Yearly: 2,
} as const;

export type Repeat = typeof Repeat[keyof typeof Repeat];
