import type { Join } from "../array/join"
import type { Subtract } from "../math/subtract"
import type { Split } from "./split"
/**
 * 在字符串左侧填充字符
 * 
 * 实现思路：（1、字符串>>>元组。2、元组>>>字符串）
 *    1、使用 Split 将字符串拆分到临时元组 _Arr
 *    2、判断元组的长度 与 Len 长度的边界情况（相减）
 *        a、结果类型是 never - 说明是负数，直接返回结果
 *        b、结果类型不是 never - 再判断结果是否为 0 
 *            1、是的 - 返回结果，不做添加
 *            2、不是的 - 递归，重复1、2，直到返回结果
 * 
 * 
 * @param { string } Str - 要填充的字符串
 * @param { string } Len - 填充长度（默认为0）
 * @param { string } Chars - 用作填充的字符串（默认是空字符串）
 * @return { string } 填充后的字符串
 * 
 * @todo：
 *    1、Chars截断处理：
 *      如：type Test = PadStart<'abc', 6, '-_'>
 *         >>> "-_-abc"
 * 
 * @example
 * type Test = PadStart<'abc', 6>
 * >>> "   abc"
 */
export type PadStart<
  Str extends string,
  Len extends number,
  Chars extends string = ' ',
  _Arr extends unknown[] = Split<Str>
> = Subtract<Len, _Arr['length']> extends never
    ? Join<_Arr, ''>
    : Subtract<Len, _Arr['length']> extends 0
      ? Join<_Arr, ''>
      : PadStart<Str, Len, Chars, [Chars, ..._Arr]>
