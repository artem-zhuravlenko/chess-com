export const objectEntries = <T extends Object>(obj: T): Array<[keyof T, T[keyof T]]> => {
  return Object.entries(obj) as Array<[keyof typeof obj, typeof obj[keyof typeof obj]]>;
};
