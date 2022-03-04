import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 function
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsFunction<() => void>
 * >>> true
 */
export type IsFunction<T> = 
  IsAny<T> extends false
    ? [T] extends [Function] 
      ? true 
      : false
    : false