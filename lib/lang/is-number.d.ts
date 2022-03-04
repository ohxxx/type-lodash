import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 number
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
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