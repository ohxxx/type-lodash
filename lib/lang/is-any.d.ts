/**
 * 判断类型是否是 any
 * 
 * @param { any } T - 要判断的类型
 * @return { boolean } 返回是否符合
 * 
 * @example
 * type Test = IsAny<[]>
 * >>> false
 * 
 */
export type IsAny<T> = 'A' extends ('B' & T) ? true : false