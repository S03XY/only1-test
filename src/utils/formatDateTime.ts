export const formatDataTimeShort = (date: Date) => {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};
