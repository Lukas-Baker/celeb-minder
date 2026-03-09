function isWithinMs(dateToCheck: Date, ms: number): boolean {
    const now = Date.now();

    // Get the difference between the date to check and now
    const diff = dateToCheck.getTime() - now;

    // Return true if it’s in the future but not further than given time
    // add day in the past in case such celebrations are displayed
    const oneDayMs = 24 * 60 * 60 * 1000
    return diff >= oneDayMs * (-1) && diff <= ms;
}

export const isWithinAWeek = (dateToCheck: Date): boolean => {
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    return isWithinMs(dateToCheck, oneWeekMs);
}

export const isWithinFourWeeks = (dateToCheck: Date): boolean => {
    const fourWeekMs = 4 * 7 * 24 * 60 * 60 * 1000;
    return isWithinMs(dateToCheck, fourWeekMs);
}

export const setToStartOfTheDay = (date: Date): Date => {
    const newDate = date;
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);

    return newDate;
}

export const dateFormat: string = "dd.MM.YYYY";

export const dateToString = (date: Date|null): string => date !== null ? date.toLocaleDateString("de-CH") : "";
