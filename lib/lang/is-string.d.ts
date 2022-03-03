import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 string
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