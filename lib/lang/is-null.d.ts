import type { IsAny } from './is-any';
/**
 * Check if type is null
 * 
 * @example
 * IsNull<number>
 * >>> false
 */
export type IsNull<T> =
  IsAny<T> extends false
    ? [T] extends [null] 
      ? true 
      : false
    : false