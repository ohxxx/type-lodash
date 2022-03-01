import type { IsAny } from "./is-any";

/**
 * Check if type is number
 * 
 * @example
 * IsNumber<11>
 * >>> true
 */
export type IsNumber<T> = 
  IsAny<T> extends false
    ? [T] extends [number] 
      ? true 
      : false
    : false