import type { Join } from '../array/join';
import type { Subtract } from '../math/subtract';
import type { Split } from './split';
import type { IsEven } from '../helpers/is-even';
import type { Length } from '../helpers/array-length';

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、基本与 PadStart、PadEnd 处理思路相同
 *    2、不同点：
 *      在递归的时候需要做下奇偶判读
 *        a、偶数 - 在数组中左右添加 Chars
 *        b、奇数 - 只在右侧添加 Chars
 */
type _Pad<
  Str extends string,
  Len extends number,
  Chars extends string = ' ',
  _Arr extends unknown[] = Split<Str> // 辅助参数
> = Subtract<Len, Length<_Arr>> extends never
  ? Join<_Arr, ''>
  : Subtract<Len, Length<_Arr>> extends 0
    ? Join<_Arr, ''>
    : IsEven<Subtract<Len, Length<_Arr>>> extends true
      ? _Pad<Str, Len, Chars, [Chars, ..._Arr, Chars]>
      : _Pad<Str, Len, Chars, [..._Arr, Chars]>

/**
 * 在字符串左右两侧填充字符
 * 如果不均分则右边比左边多一个
 * 
 * @param { string } Str - 要填充的字符串
 * @param { string } Len - 填充长度（默认为0）
 * @param { string } Chars - 用作填充的字符串（默认是空字符串）
 * @return { string } 填充后的字符串
 * 
 * @todo：
 *    1、Chars截断处理：
 *      如：type Test = Pad<'abc', 8, '-_'>
 *         >>> "_-abc_-_"
 * 
 * @example
 * type Test = Pad<'abc', 8, '*'>
 * >>> "**abc***"
 */
export type Pad<
  Str extends string,
  Len extends number,
  Chars extends string = ' ',
> = _Pad<Str, Len, Chars>;