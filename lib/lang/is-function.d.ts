import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 function
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