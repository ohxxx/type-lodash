import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 error
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsError<'xxx'>
 * >>> false
 */
export type IsError<T> = 
  IsAny<T> extends false
    ? [T] extends [Error] 
      ? true 
      : false
    : false