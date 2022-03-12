import type { Join } from "../array/join"
import type { Subtract } from "../math/subtract"
import type { Split } from "./split"
/**
 * 在字符串右侧填充字符
 * 
 * 实现思路：与 PadStart 相同，不同点就是在于 _Arr 的处理
 *    PadStart：[Chars, ..._Arr]
 *    PadEnd：[..._Arr, Chars]
 * 
 * 
 * @param { string } Str - 要填充的字符串
 * @param { string } Len - 填充长度（默认为0）
 * @param { string } Chars - 用作填充的字符串（默认是空字符串）
 * @return { string } 填充后的字符串
 * 
 * @todo：
 *    1、Chars截断处理：
 *      如：type Test = PadEnd<'abc', 6, '-_'>
 *         >>> "abc-_-"
 * 
 * @example
 * type Test = PadEnd<'abc', 6>
 * >>> "abc   "
 */
export type PadEnd<
  Str extends string,
  Len extends number,
  Chars extends string = ' ',
  _Arr extends unknown[] = Split<Str>
> = Subtract<Len, _Arr['length']> extends never
    ? Join<_Arr, ''>
    : Subtract<Len, _Arr['length']> extends 0
      ? Join<_Arr, ''>
      : PadEnd<Str, Len, Chars, [..._Arr, Chars]>
