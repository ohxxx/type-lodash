import type { IsAny } from './is-any';
/**
 * Check if type is undefined
 * 
 * @example
 * IsUndefined<number>
 * >>> false
 */
export type IsUndefined<T> = 
  IsAny<T> extends false
    ? [T] extends [undefined] 
      ? true 
      : false
    : false