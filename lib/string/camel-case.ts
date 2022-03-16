import type { ASCIISymbol, ArabicFigures, EnglishChars, UppercaseChars, LowercaseChars } from "../helpers/constant";
import type { LowerFirst } from "./lower-first";
import type { ToLower } from "./to-lower";
import type { ToUpper } from "./to-upper";
/**
 * 符号 + 符号
 */
type MatchAllASCIISymbol<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ASCIISymbol}${ASCIISymbol}`
  ? true
  : false

/**
 * 符号 + 英文
 */
type MatchSymbolEnglish<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ASCIISymbol}${EnglishChars}`
  ? true
  : false

/**
 * 符号 + 数字
 */
type MatchSymbolNumber<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ASCIISymbol}${ArabicFigures}`
  ? true
  : false

/**
 * 英文 + 符号
 */
type MatchEnglishSymbol<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${EnglishChars}${ASCIISymbol}`
  ? true
  : false

/**
 * 数字 + 符号
 */
type MatchNumberSymbol<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ArabicFigures}${ASCIISymbol}`
  ? true
  : false

/**
 * 数字 + 英文
 */
type MatchNumberEnglish<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ArabicFigures}${EnglishChars}` 
  ? true
  : false

/**
 * 英文 + 数字
 */
type MatchEnglishNumber<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${EnglishChars}${ArabicFigures}` 
  ? true
  : false

/**
 * 数字 + 数字
 */
type MatchAllNumber<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${ArabicFigures}${ArabicFigures}` 
  ? true
  : false


/**
 * 大写 + 大写
 */
type MatchAllUpperCase<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${UppercaseChars}${UppercaseChars}` 
  ? true
  : false

/**
 * 小写 + 小写
 */
type MatchAllLowercase<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${LowercaseChars}${LowercaseChars}` 
  ? true
  : false

/**
 * 小写 + 大写
 */
type MatchLowerUpper<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${LowercaseChars}${UppercaseChars}` 
  ? true
  : false

/**
 * 其他字符
 */
type OtherSymbol<Str extends string> =
  Str extends EnglishChars
  ? false
  : Str extends ASCIISymbol
    ? false
    : Str extends ArabicFigures
      ? false
      : true

/**
 * 大写 + 其他（排除数字、英文、已知符号）
 */
type MatchUppercaseOther<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${UppercaseChars}${infer Rest}` 
  ? OtherSymbol<Rest>
  : false


/**
 * 将字符串转换为驼峰式大小写
 * 
 * 看了一下 lodash 的实现：replace + reduce
 * 其实用 ts 的话也就是 模式匹配 + 递归 处理
 * 但是源码中还使用了 unicode 与 ascii 的匹配转换规则
 * 所以这里我准备将所有出现的规则列举出，并进行模式匹配处理
 * 
 * 出现场景：
 *    1、符号 + 符号
 *    2、符号 + 英文
 *    3、符号 + 数字
 *    4、英文 + 符号
 *    5、数字 + 符号
 *    6、数字 + 英文
 *    7、英文 + 数字
 *    8、数字 + 数字
 *    9、大写英文 + 大写英文
 *    10、小写英文 + 小写英文
 *    11、小写英文 + 大写英文
 *    12、大写英文 + 其他
 * 
 * 
 * 实现思路：（整体思路如上述）
 *    1、进行模式匹配
 *    2、递归处理
 */
type _CamelCase<Str extends string> =
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? MatchAllASCIISymbol<First, Second> extends true
      ? _CamelCase<Rest>
      : MatchAllNumber<First, Second> extends true
        ? `${First}${_CamelCase<`${Second}${Rest}`>}`
        : MatchAllUpperCase<First, Second> extends true
          ? `${ToLower<First>}${_CamelCase<`${Second}${Rest}`>}`
          : MatchAllLowercase<First, Second> extends true
            ? `${First}${_CamelCase<`${Second}${Rest}`>}`
            : MatchSymbolEnglish<First, Second> extends true
              ? `${ToUpper<Second>}${_CamelCase<Rest>}`
              : MatchSymbolNumber<First, Second> extends true
                ? `${_CamelCase<`${Second}${Rest}`>}`
                : MatchEnglishSymbol<First, Second> extends true
                  ? `${ToLower<First>}${_CamelCase<`${Second}${Rest}`>}`
                  : MatchNumberSymbol<First, Second> extends true
                    ? `${First}${_CamelCase<`${Second}${Rest}`>}`
                    : MatchNumberEnglish<First, Second> extends true
                      ? `${First}${ToUpper<Second>}${_CamelCase<`${Rest}`>}`
                      : MatchEnglishNumber<First, Second> extends true
                        ? `${ToLower<First>}${_CamelCase<`${Second}${Rest}`>}`
                        : MatchLowerUpper<First, Second> extends true
                          ? `${First}${Second}${_CamelCase<`${Rest}`>}`
                          : MatchUppercaseOther<First, Second> extends true
                            ? `${ToLower<First>}${_CamelCase<`${Second}${Rest}`>}`
                            : `${First}${Second}${_CamelCase<Rest>}`
    : Str extends ASCIISymbol
      ? ''
      : Str extends UppercaseChars
        ? ToLower<Str>
        : Str

export type CamelCase<Str extends string> = LowerFirst<_CamelCase<Str>>
