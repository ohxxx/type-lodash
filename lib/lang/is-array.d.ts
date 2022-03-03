import type { IsAny } from './is-any';

/**
 * 判断类型是否是 array
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