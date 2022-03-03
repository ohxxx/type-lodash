/**
 * 判断类型是否是 any
 * 
 * @example
 * type Test = IsAny<[]>
 * >>> false
 * 
 */
export type IsAny<T> = 'A' extends ('B' & T) ? true : false