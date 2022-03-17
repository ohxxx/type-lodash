import type { ASCIISymbol, ArabicFigures, EnglishChars, UppercaseChars, LowercaseChars } from "../helpers/constant";
import type { LowerFirst } from "./lower-first";
import type { ToLower } from "./to-lower";
import type { ToUpper } from "./to-upper";
/**
 * 常规类型合集
 */
type Types = {
  // 符号 + 符号
  'allASCIISymbol': `${ASCIISymbol}${ASCIISymbol}`
  // 符号 + 英文
  'symbolEnglish': `${ASCIISymbol}${EnglishChars}`
  // 符号 + 数字
  'symbolNumber': `${ASCIISymbol}${ArabicFigures}`
  // 英文 + 符号
  'englishSymbol': `${EnglishChars}${ASCIISymbol}`
  // 数字 + 符号
  'numberSymbol': `${ArabicFigures}${ASCIISymbol}`
  // 数字 + 英文
  'numberEnglish': `${ArabicFigures}${EnglishChars}` 
  // 英文 + 数字
  'englishNumber': `${EnglishChars}${ArabicFigures}`
  // 数字 + 数字
  'allNumber': `${ArabicFigures}${ArabicFigures}`
  // 大写 + 大写
  'allUppercase': `${UppercaseChars}${UppercaseChars}` 
  // 小写 + 小写
  'allLowercase': `${LowercaseChars}${LowercaseChars}`
}

/**
 * 匹配常规类型
 */
type MatchRegularType<
  LeftStr extends string,
  RightStr extends string,
  Key extends keyof Types
> = `${LeftStr}${RightStr}` extends Types[Key] ? true : false
  

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
 * 
 */
type MatchUppercaseOther<
  LeftStr extends string,
  RightStr extends string
> = `${LeftStr}${RightStr}` extends `${UppercaseChars}${infer Rest}` 
  ? OtherSymbol<Rest>
  : false


/**
 * 公共方法：第一位转小写，后面继续递归
 */
type FirstToLower<
  LeftStr extends string,
  RightStr extends string
> =
  MatchRegularType<LeftStr, RightStr, 'allUppercase'> extends false
    ? MatchRegularType<LeftStr, RightStr, 'englishSymbol'> extends false
      ? MatchRegularType<LeftStr, RightStr, 'englishNumber'> extends false
        ? MatchUppercaseOther<LeftStr, RightStr> extends false
          ? false
          : true
        : true
      : true
    : true


/**
 * 公共方法：第一位不做任何操作，后面继续递归
 */
type ContinueRecursion<
  LeftStr extends string,
  RightStr extends string
> =
  MatchRegularType<LeftStr, RightStr, 'allNumber'> extends false
    ? MatchRegularType<LeftStr, RightStr, 'allLowercase'> extends false
      ? MatchRegularType<LeftStr, RightStr, 'numberSymbol'> extends false
        ? false
        : true
      : true
    : true
  

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
 *    11、大写英文 + 其他
 * 
 * 
 * 实现思路：（整体思路如上述）
 *    1、进行模式匹配
 *    2、递归处理
 */
type _CamelCase<Str extends string> =
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? MatchRegularType<First, Second, 'allASCIISymbol'> extends true
      ? _CamelCase<Rest>
      : ContinueRecursion<First, Second> extends true
        ? `${First}${_CamelCase<`${Second}${Rest}`>}`
        : FirstToLower<First, Second> extends true
          ? `${ToLower<First>}${_CamelCase<`${Second}${Rest}`>}`
          : MatchRegularType<First, Second, 'symbolEnglish'> extends true
            ? `${ToUpper<Second>}${_CamelCase<Rest>}`
            : MatchRegularType<First, Second, 'symbolNumber'> extends true
              ? `${_CamelCase<`${Second}${Rest}`>}`
              : MatchRegularType<First, Second, 'numberEnglish'> extends true
                ? `${First}${ToUpper<Second>}${_CamelCase<`${Rest}`>}`
                : `${First}${Second}${_CamelCase<Rest>}`
    : Str extends ASCIISymbol
      ? ''
      : Str extends UppercaseChars
        ? ToLower<Str>
        : Str

export type CamelCase<Str extends string> = LowerFirst<_CamelCase<Str>>
