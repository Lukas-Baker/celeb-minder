export const CelebrationType = {
  Birthday: 1,
  NameDay: 2,
  Anniversary: 3,
  Other: 4,
} as const;

export type CelebrationType = typeof CelebrationType[keyof typeof CelebrationType];

// gets name value of the enum
export function getCelebrationName(value: number): string {
  const entry = Object.entries(CelebrationType)
    .find(([, v]) => v === value);
  return entry ? entry[0] : '';
}
