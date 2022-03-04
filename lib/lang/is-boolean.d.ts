import type { IsAny } from './is-any';
import type { IsNull } from './is-null';
import type { IsUndefined } from './is-undefined';
/**
 * 判断类型是否是 boolean
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsBoolean<null>
 * >>> false
 * 
 */
export type IsBoolean<T> =
  IsAny<T> extends false
    ? IsNull<T> extends false
      ? IsUndefined<T> extends false
        ? [T] extends [boolean]
          ? true
          : false
        : false
      : false
    : false