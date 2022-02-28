/**
 * Check if type is undefined
 * 
 * @example
 * IsUndefined<number>
 * >>> false
 */
export type IsUndefined<T> = [T] extends [undefined] ? true : false;