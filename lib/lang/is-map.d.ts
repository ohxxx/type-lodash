import type { IsAny } from "./is-any";

/**
 * 判断类型是否是 map
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * const data = new Map()
 * type Test = IsMap<typeof data>
 * >>> true
 */
export type IsMap<T> = 
  IsAny<T> extends false
    ? [T] extends [Map<any, any>] 
      ? true 
      : false
    : false
    
    