import type { Join } from "../array/join"
import type { Length } from "../helpers/array-length"
import type { Subtract } from "../math/subtract"
import type { Split } from "./split"

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：与 PadStart 相同，不同点就是在于 _Arr 的处理
 *    PadStart：[Chars, ..._Arr]
 *    PadEnd：[..._Arr, Chars]
 */
type _PadEnd<
  Str extends string,
  Len extends number,
  Chars extends string = ' ',
  _Arr extends unknown[] = Split<Str> // 辅助参数
> = Subtract<Len, Length<_Arr>> extends never
  ? Join<_Arr, ''>
  : Subtract<Len, Length<_Arr>> extends 0
    ? Join<_Arr, ''>
    : _PadEnd<Str, Len, Chars, [..._Arr, Chars]>


/**
 * 在字符串右侧填充字符
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
> = _PadEnd<Str, Len, Chars>
