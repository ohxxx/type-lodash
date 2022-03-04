import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 set
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
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