import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 error
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