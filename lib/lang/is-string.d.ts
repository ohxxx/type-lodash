import type { IsAny } from "./is-any";

/**
 * Check if type is string
 * 
 * @example
 * IsString<'xxx'>
 * >>> true
 */
export type IsString<T> = 
  IsAny<T> extends false
    ? [T] extends [string] 
      ? true 
      : false
    : false