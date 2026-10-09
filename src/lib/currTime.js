export const CurrTime = new Intl.DateTimeFormat("bn-BD", {
  dateStyle: "full",
  timeZone: "Asia/Dhaka",
}).format(Date.now());