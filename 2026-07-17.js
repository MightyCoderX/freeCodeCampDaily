/*Birthday Countdown

Given today's date and a birthday, return the number of days until the person's next birthday.

 - Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
 - The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
 - If today is their birthday, return the number of days until their next birthday (not 0).
 - Leap years should be accounted for.

Tests:
 1. daysUntilBirthday("2026-07-16", "9/7") should return 53.
 2. daysUntilBirthday("2026-07-16", "3/22") should return 249.
 3. daysUntilBirthday("2026-07-16", "7/16") should return 365.
 4. daysUntilBirthday("2024-02-28", "3/1") should return 2.
 5. daysUntilBirthday("2023-04-24", "12/30") should return 250.
 6. daysUntilBirthday("2024-03-01", "2/29") should return 1460.
 7. daysUntilBirthday("2096-03-01", "2/29") should return 2920.
*/

function daysUntilBirthday(today, birthday) {
    let [year, month, day] = today.split("-").map(d => parseInt(d));
    let [birthMonth, birthDay] = birthday.split("/").map(d => parseInt(d))

    let bdayYear = year;
    if (
        (month === birthMonth && day === birthDay) ||
        (month > birthMonth || (month === birthMonth && day > birthDay))
    ) {
        bdayYear++;
    }

    let isLeap = year => {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                return year % 400 === 0;
            }
            return true;
        }
        return false;
    }

    if (!isLeap(bdayYear) && birthday === "2/29") {
        while (!isLeap(bdayYear))
            bdayYear += 1;
    }

    const msToday = new Date(today);
    const msBday = new Date(bdayYear, birthMonth - 1, birthDay);

    const msDiff = msBday - msToday;

    const msInADay = 24 * 60 * 60 * 1000;
    const days = Math.round(msDiff / (msInADay));

    return days;
}
