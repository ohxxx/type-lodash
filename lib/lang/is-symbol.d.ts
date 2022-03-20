import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 symbol
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsSymbol<{}>
 * >>> false
 */
export type IsSymbol<T> = 
  IsAny<T> extends false  
    ? [T] extends [symbol]
      ? true
      : false
    : false