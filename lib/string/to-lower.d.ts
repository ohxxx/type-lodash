/**
 * 将整个字符串转成小写
 * 
 * 借助 typescript 中内置的 Lowercase 直接完成
 * 这里只是另起了一个别名，与 lodash 同步
 * 
 * 
 * @param { string } S - 需要处理的字符串
 * @return { string } 全部小写后的字符串
 * 
 * @example
 * type Test = ToLower<'FOO'>
 * >>> foo
 */
export type ToLower<S extends string> = Lowercase<S>