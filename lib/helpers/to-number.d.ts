/**
 * 将 字符串 转成 数字
 * 
 * @param {string} str - 要转成数字的字符串
 * 
 * @example
 * type Test = ToNumber<'666'>
 * >>> 666
 */
export type ToNumber<Str extends string> =
  Str extends `${infer N extends number}`
    ? N
    : unknown