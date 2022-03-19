import type { ASCIISymbol } from '../helpers/constant'
import type { MatchOtherLeft, MatchRegularType } from '../helpers/match-type'
import type { A_AATypes, FilterSecond, MatchConvertAA_A, SecondAddSpacesBA } from '../helpers/string-convert'
import type { Split } from './split'
import type { ToUpper } from './to-upper'
import type { TrimEnd } from './trim-end'
import type { UpperFirst } from './upper-first'
/**
 * 符合能转换成 A_AA 的组合
 */
type _A_AATypes = Omit<A_AATypes, 'aAA'>
/**
 * 将指定模式的字符转成 A_AA
 */
type MatchConvertA_AA<First extends string, Second extends string, Third extends string> =
  `${First}${Second}${Third}` extends _A_AATypes[keyof _A_AATypes]
    ? true
    : false


/**
 * 分隔符
 */
type Delimiter = ' '


/**
 * 内部转换规则
 */
type _StringConvert<Str extends string> = 
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? MatchRegularType<First, Second, 'allSymbol'> extends true
      ? `${_StringConvert<`${Rest}`>}`
      : MatchRegularType<First, Second, 'symbolEnglish'> extends true
        ? `${Second}${_StringConvert<`${Rest}`>}`
        : FilterSecond<First, Second> extends true
          ? `${First}${Delimiter}${_StringConvert<`${Rest}`>}`
          : MatchRegularType<First, Second, 'lowercaseUppercase'> extends true
            ? `${ToUpper<First>}${Delimiter}${Second}${_StringConvert<`${Rest}`>}`
            : MatchConvertA_AA<First, Second, Split<Rest>[0]> extends true
              ? `${First}${Delimiter}${_StringConvert<`${Second}${Rest}`>}`
              : MatchConvertAA_A<First, Second, Split<Rest>[0]> extends true
                ? `${First}${Second}${Delimiter}${_StringConvert<`${Rest}`>}`
                : SecondAddSpacesBA<First, Second> extends true
                  ? `${First}${Delimiter}${Second}${Delimiter}${_StringConvert<`${Rest}`>}`
                  : MatchOtherLeft<First, Second, 'symbol'> extends true
                    ? `${Delimiter}${Second}${_StringConvert<`${Rest}`>}`
                    : `${First}${_StringConvert<`${Second}${Rest}`>}`
    : Str extends ASCIISymbol
      ? ''
      : Str

/**
 * 将字符串转换为起始大小写
 * 
 * 实现思路：模式匹配 + 递归
 * 需要注意：
 *    1、指定符号、字母、数字及其他符号使用分隔符隔开
 *    2、_StringConvert 处理完成后进行整字符 小写 转换
 *    3、结尾需要进行去分隔符处理（模式匹配问题）
 * 
 * 
 * @param { string } - 要转换的字符串
 * @return { string } 转换后开始的大小写字符串
 * 
 * @example
 * type Test = StartCase<'Foo Bar'>
 * >>> 'Fpp Bar'
 */
export type StartCase<Str extends string> = UpperFirst<TrimEnd<_StringConvert<Str>>>