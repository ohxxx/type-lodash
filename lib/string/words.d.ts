import type { ArabicFigures, ASCIISymbol, EnglishChars, LowercaseChars, RankChars, UppercaseChars } from "../helpers/constant"
import type { MatchConvertA_AA } from "../helpers/string-convert"
import type { Split } from "./split"

/**
 * 实现一个最小 words，用来验证思路
 * 
 * 只匹配 '666xxx999'，并返回：['666', 'xxx', '999']
 */
// type MiniWords<Str extends string, _TempStr extends string = '', _Result extends string[] = []> =
//   Str extends `${infer First}${infer Second}${infer Rest}`
//     ? `${First}${Second}` extends '66'
//       ? MiniWords<Rest, `${_TempStr}${First}${Second}`, _Result>
//       : `${First}${Second}` extends '6x'
//         ? MiniWords<`${Second}${Rest}`, '', [..._Result, `${_TempStr}${First}`]>
//         : `${First}${Second}` extends 'xx'
//           ? MiniWords<Rest, `${_TempStr}${First}${Second}`, _Result>
//           : `${First}${Second}` extends 'x9'
//             ? MiniWords<`${Second}${Rest}`, `${Second}`, [..._Result, `${_TempStr}${First}`]>
//             : `${First}${Second}` extends '99'
//               ? MiniWords<Rest, `${_TempStr}${First}${Second}`, [..._Result, `${_TempStr}${First}${Second}`]>
//               : _Result
//     : _Result
// type Test = MiniWords<'666xxx999'>

/**
 * ASCII中文标点符号字符
 * @temporary
 */
type ASCIICNSymbol = '。' | '？' | '！' | '，' | '、' | '；' | '：' | '「' | '」' | '『' | '』' | '‘' | '’' | '“' | '”' | '（' | '）' | '〔' | '〕' | '【' | '】' | '—' | '…' | '–' | '．' | '《' | '》' | '〈' | '〉'

/**
 * 匹配除 ASCII打印字符 外的其他字符
 */
type MatchChars<S> = S extends ASCIISymbol ? never : S;

/**
 * 除英文、数字、符号外的字符
 */
type OtherChars<S> = S extends ASCIISymbol | EnglishChars | ArabicFigures ? never : S;

/**
 * 添加非空字符串
 */
type AddNonEmptyStr<Str extends string, Arr extends string[]> = Str extends '' ? Arr : [...Arr, Str]
 
/**
 * 添加新单词
 */
type AddNewWord<First extends string, Second extends string> = 
  `${First}${Second}` extends `${ArabicFigures}${MatchChars<Second>}` |
                              `${MatchChars<First>}${ArabicFigures}` | 
                              `${EnglishChars}${OtherChars<Second>}`
    ? true
    : false
  
/**
 * 添加临时字符串集合
 */
type AddTempStr<First extends string, Second extends string> = 
  `${First}${Second}` extends `${ArabicFigures}${ArabicFigures}` |
                              `${ASCIICNSymbol}${LowercaseChars}` | 
                              `${LowercaseChars}${ASCIICNSymbol}` |
                              `${UppercaseChars}${ASCIICNSymbol}`
    ? true
    : false


/**
 * 内部实现，私有操作不对外暴露
 * 
 * 实现思路：（参考于 StringConvert 匹配逻辑），其实就是进行模式匹配 + 递归
 *    1、匹配 ASCII打印字符 的左右情况
 *    2、匹配除 ASCII打印字符 外的其他字符 的左右情况
 *    3、匹配 ASCII中文标点字符 的左右情况（特殊情况可持续性添加）
 *    4、匹配 大小写字母 的左右情况
 * 
 */
type _Words<Str extends string, _TempStr extends string = '', _Result extends string[] = []> = 
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? `${First}${Second}` extends `${ASCIISymbol}${ASCIISymbol}`
      ? _Words<`${Rest}`, '', AddNonEmptyStr<_TempStr, _Result>>
      : `${First}${Second}` extends `${MatchChars<First>}${ASCIISymbol}`
        ? _Words<`${Rest}`, '', [..._Result, `${_TempStr}${First}`]>
        : `${First}${Second}` extends `${ASCIISymbol}${MatchChars<Second>}`
          ? _Words<`${Rest}`, `${_TempStr}${Second}`, AddNonEmptyStr<_TempStr, _Result>>
          : AddTempStr<First, Second> extends true
            ? _Words<`${Second}${Rest}`, `${_TempStr}${First}`, _Result>
            : AddNewWord<First, Second> extends true
              ? _Words<`${Second}${Rest}`, '', [..._Result, `${_TempStr}${First}`]>
              : `${First}${Second}` extends `${ASCIICNSymbol}${UppercaseChars}`
                ? _Words<
                    `${Second}${Rest}`,
                     _TempStr extends '' ? `${_TempStr}${First}` : '', 
                     _TempStr extends '' ? [..._Result] : [..._Result, `${_TempStr}${First}`
                  ]>
                : MatchConvertA_AA<First, Second, Split<Rest>[0]> extends true
                  ? _Words<`${Second}${Rest}`, '', [..._Result, `${_TempStr}${First}`]>
                  : _Words<`${Second}${Rest}`, `${_TempStr}${First}`, _Result>
    : Str extends ''
      ? AddNonEmptyStr<_TempStr, _Result>
      : Str extends MatchChars<Str>
        ? [..._Result, `${_TempStr}${Str}`]
        : AddNonEmptyStr<_TempStr, _Result>
    
/**
 * 将字符串拆分为单词数组
 * 
 * 需要注意：
 *    因为 lodash 中第二个参数 Pattern 是 RegExp | string 类型
 *    但是 ts 中暂时无法匹配正则，所以默认不支持正则匹配拆分
 * 
 * 
 * @param {string} Str - 要检查的字符串
 * @return { string } 返回字符串的单词
 * 
 * @example
 * type Test = Words<'fred, barney, & pebbles'>
 * >>> ['fred', 'barney', 'pebbles']
 */
export type Words<Str extends string> =
  Str extends RankChars
    ? [Str]
    : Str extends ''
      ? []
      : _Words<Str>
