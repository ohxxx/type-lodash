import type { Split } from "../string/split"
import type { ASCIISymbol, LowercaseChars, UppercaseChars } from "./constant"
import type { MatchOtherLeft, MatchOtherRight, MatchRegularType } from "./match-type"

/**
 * 过滤第二个字符
 */
export type FilterSecond<
  LeftStr extends string,
  RightStr extends string
> = 
  MatchRegularType<LeftStr, RightStr, 'englishSymbol'> extends false
    ? MatchOtherRight<LeftStr, RightStr, 'symbol'> extends false
      ? false
      : true
    : true


/**
* 字符前后添加空格
*/
export type SecondAddSpacesBA<
  LeftStr extends string,
  RightStr extends string
> = 
  MatchRegularType<LeftStr, RightStr, 'numberEnglish'> extends false
    ? MatchRegularType<LeftStr, RightStr, 'englishNumber'> extends false
      ? false
      : true
    : true


/**
* 连续英文字符转化：
*    1、aaa >>> AAA
*    2、Aaa >>> AAA
*    3、AAA >>> AAA
* 
*    4、aaA >>> AA A
*    5、AaA >>> AA A
* 
*    6、aAa >>> A AA
*    7、AAa >>> A AA
*    8、aAA >>> A AA
*/
// type AAATypes = {
//   'aaa': `${LowercaseChars}${LowercaseChars}${LowercaseChars}`
//   'Aaa': `${UppercaseChars}${LowercaseChars}${LowercaseChars}`
//   'AAA': `${UppercaseChars}${UppercaseChars}${UppercaseChars}`
// }
// type AAA<First extends string, Second extends string, Third extends string> =
//   `${First}${Second}${Third}` extends AAATypes[keyof AAATypes]
//     ? true
//     : false
/**
* 符合能转换成 AA_A 的组合
*/
export type AA_ATypes = {
  'aaA': `${LowercaseChars}${LowercaseChars}${UppercaseChars}`
  'AaA': `${UppercaseChars}${LowercaseChars}${UppercaseChars}`
}

/**
* 将指定模式的字符转成 AA_A
*/
export type MatchConvertAA_A<First extends string, Second extends string, Third extends string> =
  `${First}${Second}${Third}` extends AA_ATypes[keyof AA_ATypes]
    ? true
    : false
 
/**
* 符合能转换成 A_AA 的组合
*/
export type A_AATypes = {
  'aAa': `${LowercaseChars}${UppercaseChars}${LowercaseChars}`
  'AAa': `${UppercaseChars}${UppercaseChars}${LowercaseChars}`
  'aAA': `${LowercaseChars}${UppercaseChars}${UppercaseChars}`
}

/**
* 将指定模式的字符转成 A_AA
*/
export type MatchConvertA_AA<First extends string, Second extends string, Third extends string> =
  `${First}${Second}${Third}` extends A_AATypes[keyof A_AATypes]
    ? true
    : false


/**
 * 字符串转换
 * 出现场景：
 *    1、符号 + 符号
 *    2、符号 + 英文
 *    3、英文 + 符号
 *    4、符号 + 其他
 *    5、其他 + 符号
 *    6、大写 + 小写
 *    7、小写 + 大写
 *    8、数字 + 英文
 *    9、英文 + 数字
 * 
 * 
 * 主要用于：UpperCase、LowerCase、KebabCase、SnakeCase
 */
export type StringConvert<Str extends string, Delimiter extends string> = 
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? MatchRegularType<First, Second, 'allSymbol'> extends true
      ? `${StringConvert<Rest, Delimiter>}`
      : MatchRegularType<First, Second, 'symbolEnglish'> extends true
        ? `${Second}${StringConvert<Rest, Delimiter>}`
        : FilterSecond<First, Second> extends true
          ? `${First}${Delimiter}${StringConvert<Rest, Delimiter>}`
          : MatchRegularType<First, Second, 'lowercaseUppercase'> extends true
            ? `${First}${Delimiter}${Second}${StringConvert<Rest, Delimiter>}`
            : MatchConvertA_AA<First, Second, Split<Rest>[0]> extends true
              ? `${First}${Delimiter}${StringConvert<`${Second}${Rest}`, Delimiter>}`
              : MatchConvertAA_A<First, Second, Split<Rest>[0]> extends true
                ? `${First}${Second}${Delimiter}${StringConvert<Rest, Delimiter>}`
                : SecondAddSpacesBA<First, Second> extends true
                  ? `${First}${Delimiter}${Second}${Delimiter}${StringConvert<Rest, Delimiter>}`
                  : MatchOtherLeft<First, Second, 'symbol'> extends true
                    ? `${Delimiter}${Second}${StringConvert<Rest, Delimiter>}`
                    : `${First}${StringConvert<`${Second}${Rest}`, Delimiter>}`
    : Str extends ASCIISymbol
      ? ''
      : Str