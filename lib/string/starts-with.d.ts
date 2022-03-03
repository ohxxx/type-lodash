import type { Split } from "./split"

/**
 * [第一步]: 将字符串转成数组
 * 
 * 直接使用 Split 
 * @example
 * type Test = Split<'halo'>
 * >> ["h", "a", "l", "o"]
 */


/**
 * [第二步]: 判断字符的第一个字符是否满足匹配条件
 * 
 * @example
 * type Test1 = MatchFirstString<'abc', 'a'>
 * >>> true
 * type Test2 = MatchFirstString<'abc', 'c'>
 * >>> false
 */
// type MatchFirstString<
//   Str extends string,
//   MatchStr extends string
//   > =
//     Str extends `${infer First}${infer Rest}`
//     ? First extends MatchStr
//       ? true
//       : false
//   : false



/**
 * [第三步]: 获取指定下标的字符串
 * 
 * @example
 * GetIndexString<'abc', 1>
 * >>> b
 */
type GetIndexString<
  Str extends string,
  Position extends number = 0,
> =
  Split<Str>[Position] extends string
    ? Split<Str>[Position]
    : null


/**
 * [最后]]: 判断字符串是否以给定的目标字符串开头
 * 
 * 实现思路:
 *    1、将字符串转成数组
 *    2、获取指定下标的字符
 *    3、判断通过下标得到的字符是否可以分配给目标字符
 *        a、可以 - 返回 true
 *        b、不可以 - 返回 false
 * 
 * @example
 * type Test1 = StartsWith<'foobar', 'a'>
 * >>> false
 * type Test2 = StartsWith<'abc', 'b', 1>
 * >>> true
 */
export type StartsWith<
  Str extends string,
  Target extends string,
  Position extends number = 0
> = 
  GetIndexString<Str, Position> extends Target
    ? true
    : false
