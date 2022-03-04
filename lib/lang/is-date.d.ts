import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 date
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
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