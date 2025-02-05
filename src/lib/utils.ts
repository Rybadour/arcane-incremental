
export function getRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function toUpperCamelCase(str: string) {
  if (str === '') {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}