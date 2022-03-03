/**
 * 字符串首字母大写，其余小写
 * 
 * 实现思路：
 *    1、使用 infer 推断
 *    2、使用内置 Uppercase、Lowercase 处理字符，返回第一个字符大写，其余字符小写的字符
 * 
 * @example
 * type Test = Capitalize<'abc'>
 * >>> Abc
 */
export type Capitalize<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Lowercase<Rest>}`
    : Str

