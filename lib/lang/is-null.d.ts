import type { IsAny } from './is-any';
/**
 * 判断类型是否是 null
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsNull<number>
 * >>> false
 */
export type IsNull<T> =
  IsAny<T> extends false
    ? [T] extends [null] 
      ? true 
      : false
    : false