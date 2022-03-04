/**
 * 字符串首字母大写，其余小写
 * 
 * 实现思路：
 *    1、使用 infer 推断
 *    2、使用内置 Uppercase、Lowercase 处理字符，返回第一个字符大写，其余字符小写的字符
 * 
 * @param { string } Str - 要开头大写的字符串
 * @return { string } 处理后的字符串
 * 
 * @example
 * type Test = Capitalize<'abc'>
 * >>> Abc
 */
export type Capitalize<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Lowercase<Rest>}`
    : Str