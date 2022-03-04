import type { IsAny } from "./is-any";
import type { IsArray } from "./is-array";
import { IsDate } from "./is-date";
import type { IsFunction } from "./is-function";

/**
 * 判断类型是否是 object
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsObject<{}>
 * >>> true
 */
export type IsObject<T> = 
  IsAny<T> extends false
    ? [T] extends [object] 
      ? IsArray<T> extends false
        ? IsFunction<T> extends false
          ? IsDate<T> extends false
            ? true
            : false
          : false
        : false
      : false
    : false