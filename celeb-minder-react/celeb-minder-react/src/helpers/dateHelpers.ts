function isWithinMs(dateToCheck: Date, ms: number): boolean {
    const now = Date.now();

    // Get the difference between the date to check and now
    const diff = dateToCheck.getTime() - now;

    // Return true if it’s in the future but not further than given time
    return diff >= 0 && diff <= ms;
}

export const isWithingAWeek = (dateToCheck: Date): boolean => {
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    return isWithinMs(dateToCheck, oneWeekMs);
}

export const isWithinFourWeeks = (dateToCheck: Date): boolean => {
    const fourWeekMs = 4 * 7 * 24 * 60 * 60 * 1000;
    return isWithinMs(dateToCheck, fourWeekMs);
}

export const dateToString = (date: Date): string => {
    return date.toLocaleDateString('cs-CZ');
}
