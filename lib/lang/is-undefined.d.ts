import type { IsAny } from './is-any';
/**
 * 判断类型是否是 undefined
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
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