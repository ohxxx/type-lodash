import type { ArabicFigures } from "../helpers/constant"
import type { ToNumber } from "../helpers/to-number"
import type { TrimStart } from "./trim-start"

/**
 * 匹配正确的字符串
 */
type MatchCorrectStr<Str> =
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? First extends `${ArabicFigures}`
      ? Second extends `${ArabicFigures}`
        ? `${First}${Second}${MatchCorrectStr<Rest>}`
        : `${First}`
      : ''
    : Str
     
/**
 * lodash 中 parseInt 会有两个参数 
 *    1、string - 当前字符串
 *    2、radix - 基数
 * 但是我们没有办法根据当前基数进行原始值的操作
 * 所以第二个参数的我们就当默认为 10 即不进行操作，只返回符合的整数
 * 
 * 
 * 实现思路：
 *    1、先使用 TrimStart 去除前面的空格
 *    2、获取正确的字符串，判断是不是数字
 *      a、是数字 - 继续递归
 *      b、不是数字 - 返回 空字符 或 never
 *    3、判断当前返回的字符串
 *      a、如果是 never 或者 空字符串 说明不是数字，直接返回 never
 *      b、如果是 数字
 *        1、是 0 直接返回 0
 *        2、不是 0，使用 TrimStart 去除前面的 0，然后 转成数字返回
 */
type _ParseInt<Str extends string> = 
  MatchCorrectStr<Str> extends never | ''
    ? never
    : MatchCorrectStr<Str> extends '0'
      ? 0
      : ToNumber<TrimStart<MatchCorrectStr<Str>, '0'>>
      


/**
 * 将字符串转成整数
 * 
 * @param { string } Str - 要转换的字符串
 * @return { string } 返回转换后的整数
 * 
 * @todo：
 *    1、支持符号判断：+、-
 * 
 * @example
 * type Test = ParseInt<'6'>
 * >>> 6
 */
export type ParseInt<Str extends string> = _ParseInt<TrimStart<Str>>