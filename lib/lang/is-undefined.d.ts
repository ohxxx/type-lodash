import type { IsAny } from './is-any';
/**
 * 判断类型是否是 undefined
 * 
 * @example
 * type Test = IsUndefined<number>
 * >>> false
 */
export type IsUndefined<T> = 
  IsAny<T> extends false
    ? [T] extends [undefined] 
      ? true 
      : false
    : false