import type { IsAny } from "./is-any";
import type { IsMap } from './is-map';

/**
 * 判断类型是否是 weakMap
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * const data = new WeakMap()
 * type Test = IsWeakMap<typeof data>
 * >>> true
 */
export type IsWeakMap<T> = 
  IsAny<T> extends false
    ? IsMap<T> extends false
      ? [T] extends [WeakMap<any, any>] 
        ? true 
        : false
      : false  
    : false