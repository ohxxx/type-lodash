import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 string
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsString<'xxx'>
 * >>> true
 */
export type IsString<T> = 
  IsAny<T> extends false
    ? [T] extends [string] 
      ? true 
      : false
    : false