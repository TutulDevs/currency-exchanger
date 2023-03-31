export function getPreviousDay(days: number) {
  const previous = new Date(new Date().getTime());
  previous.setDate(new Date().getDate() - days);

  const [y, m, d] = [
    previous.getFullYear(),
    previous.getMonth(),
    previous.getDate(),
  ];
  const month = m + 1;
  return `${y}-${month < 10 ? "0" + month : month}-${d < 10 ? "0" + d : d}`;
}
