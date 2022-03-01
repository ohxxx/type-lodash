import type { IsAny } from "./is-any";
import type { IsArray } from "./is-array";
import { IsDate } from "./is-date";
import type { IsFunction } from "./is-function";

/**
 * Check if type is object
 * 
 * @example
 * IsObject<{}>
 * >>> true
 */
export type IsObject<T> = 
  IsAny<T> extends false
    ? [T] extends [object] 
      ? IsArray<T> extends false
        ? IsFunction<T> extends false
          ? IsDate<T> extends false
            ? true
            : false
          : false
        : false
      : false
    : false