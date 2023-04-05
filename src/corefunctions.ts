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

export const setLocalData = (name: string, value: any, parse?: boolean) => {
  if (typeof window !== "undefined") {
    if (parse) localStorage.setItem(name, JSON.stringify(value));
    else localStorage.setItem(name, value);
  } else null;
};

export const getLocalData = (key: string, parsed?: boolean) => {
  let data: any =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  if (parsed) {
    data = data ? JSON.parse(data) : "";
  } else {
    data = data;
  }

  return data;
};
