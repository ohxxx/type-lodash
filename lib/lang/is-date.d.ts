import type { IsAny } from "./is-any";

/**
 * Check if type is date
 * 
 * @example
 * IsDate<123>
 * >>> false
 */
export type IsDate<T> = 
  IsAny<T> extends false
    ? [T] extends [Date] 
      ? true 
      : false
    : false