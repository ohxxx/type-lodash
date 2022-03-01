import type { IsAny } from "./is-any";

/**
 * Check if type is set
 * 
 * @example
 * IsSet<{}>
 * >>> false
 */
export type IsSet<T> = 
  IsAny<T> extends false
    ? [T] extends [Set<any>] 
      ? true 
      : false
    : false