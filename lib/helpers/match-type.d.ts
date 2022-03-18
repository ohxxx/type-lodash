import { ArabicFigures, ASCIISymbol, BaseTypes, CombinationTypes, EnglishChars } from "./constant"

/**
 * 其他字符
 */
export type OtherSymbol<Str extends string> =
  Str extends EnglishChars
    ? false
    : Str extends ASCIISymbol
      ? false
      : Str extends ArabicFigures
        ? false
        : true
     

/**
* 匹配其他的左侧类型
*/
export type MatchOtherLeft<
  LeftStr extends string,
  RightStr extends string,
  Key extends keyof BaseTypes
> = `${LeftStr}${RightStr}` extends `${BaseTypes[Key]}${infer Rest}` 
  ? OtherSymbol<Rest>
  : false


/**
* 匹配其他的右侧类型
*/
export type MatchOtherRight<
  LeftStr extends string,
  RightStr extends string,
  Key extends keyof BaseTypes
> = `${LeftStr}${RightStr}` extends `${infer First}${BaseTypes[Key]}` 
  ? OtherSymbol<First>
  : false


/**
 * 匹配常规类型
 */
export type MatchRegularType<
  LeftStr extends string,
  RightStr extends string,
  Key extends keyof CombinationTypes
> = `${LeftStr}${RightStr}` extends CombinationTypes[Key] ? true : false
 