export const CelebrationType = {
  Default: null,
  Birthday: 1,
  NameDay: 2,
  Anniversary: 3,
} as const;

export type CelebrationType = typeof CelebrationType[keyof typeof CelebrationType];

// gets name value of the enum
export function getCelebrationName(value: number|null): string {
  switch(value) {
    case null: return "-";
    case CelebrationType.Birthday: return "Birthday";
    case CelebrationType.NameDay: return "Name day";
    case CelebrationType.Anniversary: return "Anniversary";
    default: throw new Error("Not supported Celebration type: " + value);
  }
}
