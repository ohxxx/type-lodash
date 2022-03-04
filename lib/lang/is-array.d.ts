import type { IsAny } from './is-any';

/**
 * 判断类型是否是 array
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsArray<[]>
 * >>> true
 * 
 */
export type IsArray<T> =
  IsAny<T> extends false
    ? T extends unknown[]
      ? true
      : false
    : false