export const numbers={
"0":"০",
"1":"১",
"2":"২",
"3":"৩",
"4":"৪",
"5":"৫",
"6":"৬",
"7":"৭",
"8":"৮",
"9":"৯",
};
export function translateNumbers(value) {
return String(value).replace(/[0-9]/g, (digit) => numbers[digit]);
}
