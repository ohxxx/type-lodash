import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 date
 * 
 * @example
 * type Test = IsDate<123>
 * >>> false
 */
export type IsDate<T> = 
  IsAny<T> extends false
    ? [T] extends [Date] 
      ? true 
      : false
    : false