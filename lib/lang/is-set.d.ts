import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 set
 * 
 * @example
 * type Test = IsSet<{}>
 * >>> false
 */
export type IsSet<T> = 
  IsAny<T> extends false
    ? [T] extends [Set<any>] 
      ? true 
      : false
    : false