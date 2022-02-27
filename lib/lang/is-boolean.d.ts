import type { IsAny } from './is-any';
/**
 * Checks if value is classified as a boolean primitive or object.
 * 
 * @example
 * IsBoolean<null>
 * >>> false
 * 
 */
export type IsBoolean<T> =
  IsAny<T> extends false
    ? T extends boolean
      ? true
      : false
    : false