import type { RegExpChars } from "../helpers/constant";
/**
 * 转义正则表达式特殊字符"^"、"$"、""、"."、"*"、"+"、"?"、"("、")"、"["、"]"、"{"、"}"、"|" 和 "\\" 在字符串中
 * 
 * 实现思路：模式匹配 + 递归
 *    1、匹配 RegExpChars 
 *      a、匹配到了 - 当前字符前添加转义符
 *      b、匹配不到 - 继续递归
 * 
 * @param { string } Str - 要转义的字符串
 * @return { string } 转义好后的字符串
 * 
 * @example
 * type Test = EscapeRegExp<'[lodash](https://lodash.com/)'>
 * >>> '\\[lodash\\]\\(https://lodash\\.com/\\)'
 */
export type EscapeRegExp<Str extends string | null | undefined> = 
  NonNullable<Str> extends never
    ? ''
    : Str extends `${infer First}${infer Rest}`
      ? First extends RegExpChars
        ? `\\${First}${EscapeRegExp<Rest>}`
        : `${First}${EscapeRegExp<Rest>}`
      : Str