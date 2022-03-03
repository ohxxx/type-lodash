import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 number
 * 
 * @example
 * type Test = IsNumber<11>
 * >>> true
 */
export type IsNumber<T> = 
  IsAny<T> extends false
    ? [T] extends [number] 
      ? true 
      : false
    : false