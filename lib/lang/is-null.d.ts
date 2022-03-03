import type { IsAny } from './is-any';
/**
 * 判断类型是否是 null
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