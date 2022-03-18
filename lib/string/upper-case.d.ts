import type { ASCIISymbol, Space } from '../helpers/constant'
import type { MatchOtherLeft, MatchOtherRight, MatchRegularType } from '../helpers/match-type'
import type { ToUpper } from './to-upper'
import type { TrimEnd } from './trim-end'
/**
 * 过滤第二个字符
 */
type FilterSecond<
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
type SecondAddSpacesBA<
  LeftStr extends string,
  RightStr extends string
> = 
  MatchRegularType<LeftStr, RightStr, 'numberEnglish'> extends false
    ? MatchRegularType<LeftStr, RightStr, 'englishNumber'> extends false
      ? false
      : true
    : true


type _UpperCase<Str extends string> = 
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? MatchRegularType<First, Second, 'allSymbol'> extends true
      ? `${_UpperCase<Rest>}`
      : MatchRegularType<First, Second, 'symbolEnglish'> extends true
        ? `${Second}${_UpperCase<Rest>}`
        : FilterSecond<First, Second> extends true
          ? `${First}${Space}${_UpperCase<Rest>}`
          : MatchRegularType<First, Second, 'lowercaseUppercase'> extends true
            ? `${First}${Space}${Second}${_UpperCase<Rest>}`
            : SecondAddSpacesBA<First, Second> extends true
              ? `${First}${Space}${Second}${Space}${_UpperCase<Rest>}`
              : MatchOtherLeft<First, Second, 'symbol'> extends true
                ? `${Space}${Second}${_UpperCase<Rest>}`
                : `${First}${_UpperCase<`${Second}${Rest}`>}`
    : Str extends ASCIISymbol
      ? ''
      : Str

/**
 * 将字符串（作为空格分隔的单词）转换为大写
 * 
 * 出现场景：
 *    1、符号 + 符号
 *    2、符号 + 英文
 *    3、英文 + 符号
 *    4、其他 + 符号
 *    5、大写 + 小写
 *    6、数字 + 英文
 *    7、英文 + 数字
 *    8、符号 + 其他
 * 
 * 
 * 实现思路：（基本与 CamelCase 一样：模式匹配 + 递归）
 *  需要注意：
 *    1、指定符号与字母数字之间需要用空格隔开
 *    2、结尾需要进行去空格处理（模式匹配问题）
 *    3、处理完成后进行大写转换
 * 
 * 
 * @param { string } - 要转换的字符串
 * @return { string } 转换后大写的字符串
 * 
 * @example
 * type Test = CamelCase<'Foo Bar'>
 * >>> 'FOO BAR'
 */
export type UpperCase<Str extends string> = TrimEnd<ToUpper<_UpperCase<Str>>>