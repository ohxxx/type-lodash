/**
 * Check if type is null
 * 
 * @example
 * IsNull<number>
 * >>> false
 */
export type IsNull<T> = [T] extends [null] ? true : false;