import type { IsAny } from './is-any';

/**
 * Checks if value is classified as an Array object.
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