import type { Subtract } from '../math/subtract'
/**
 * 重复给定的字符串 n 次
 * 
 * 实现思路：
 *    1、递减要重复的次数，直到为0
 *    2、使用临时字符串拼接存储当前要重复的字符串
 * 
 * 
 * @param { string } Str - 要重复的字符串
 * @param { number } N - 重复字符串的次数（默认为 1 ）
 * @param { string } _Result - 结果字符串（内部递归使用）
 *  
 * @example
 * type Test = Repeat<'*', 3>
 * >>> '***'
 */
export type Repeat<
  Str extends string = '',
  N extends number = 1,
  _Result extends string = ''
> = 
  N extends 0
    ? _Result
    : Repeat<Str, Subtract<N, 1>, `${_Result}${Str}`>