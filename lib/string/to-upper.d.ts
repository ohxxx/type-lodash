/**
 * 将整个字符串转成大写
 * 
 * 借助 typescript 中内置的 Uppercase 直接完成
 * 这里只是另起了一个别名，与 lodash 同步
 * 
 * @example
 * type Test = ToUpper<'foo'>
 * >>> FOO
 */
export type ToUpper<S extends string> = Uppercase<S>