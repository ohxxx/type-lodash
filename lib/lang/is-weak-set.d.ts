import type { IsAny } from "./is-any";
import type { IsSet } from "./is-set";

/**
 * Check if type is weakset
 * 
 * @example
 * IsWeakSet<{}>
 * >>> false
 */
export type IsWeakSet<T> = 
  IsAny<T> extends false
    ? IsSet<T> extends false
      ? [T] extends [WeakSet<any>] 
        ? true 
        : false
      : false
    : false