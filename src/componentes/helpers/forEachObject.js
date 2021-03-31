export const forEachObject = (object, f) =>
  Object.keys(object).map((key, index) => f(key, index));
