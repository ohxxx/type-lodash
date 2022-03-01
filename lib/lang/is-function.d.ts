import type { IsAny } from "./is-any";

/**
 * Check if type is function
 * 
 * @example
 * IsFunction<() => void>
 * >>> true
 */
export type IsFunction<T> = 
  IsAny<T> extends false
    ? [T] extends [Function] 
      ? true 
      : false
    : false