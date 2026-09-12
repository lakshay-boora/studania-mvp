export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function titleCase(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
