import type { IsAny } from "./is-any";
import type { IsSet } from "./is-set";

/**
 * 判断类型是否是 weakMap
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsWeakSet<{}>
 * >>> false
 */
export type IsWeakSet<T> = 
  IsAny<T> extends false
    ? IsSet<T> extends false
      ? [T] extends [WeakSet<any>] 
        ? true 
        : false
      : false
    : false