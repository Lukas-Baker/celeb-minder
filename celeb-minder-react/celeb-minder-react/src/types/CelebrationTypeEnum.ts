export const CelebrationType = {
  Birthday: 1,
  NameDay: 2,
  Anniversary: 3,
  Other: 4,
} as const;

export type CelebrationType = typeof CelebrationType[keyof typeof CelebrationType];
