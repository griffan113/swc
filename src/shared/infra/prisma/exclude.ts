/**
 * Exclude keys from model
 * */
export function exclude<T, Key extends keyof T>(model: T, ...keys: Key[]): Omit<T, Key> {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    // eslint-disable-next-line no-param-reassign
    delete model[key];
  }
  return model;
}
