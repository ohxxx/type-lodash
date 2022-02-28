import type { IsAny } from './is-any';

/**
 * Check if type is an array
 * 
 * @example
 * IsArray<[]>
 * >>> true
 * 
 */
export type IsArray<T> =
  IsAny<T> extends false
    ? T extends unknown[]
      ? true
      : false
    : false