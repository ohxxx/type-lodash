import type { IsAny } from "./is-any";

/**
 * Check if type is error
 * 
 * @example
 * IsError<'xxx'>
 * >>> false
 */
export type IsError<T> = 
  IsAny<T> extends false
    ? [T] extends [Error] 
      ? true 
      : false
    : false