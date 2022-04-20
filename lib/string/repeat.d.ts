import type { Subtract } from '../math/subtract'

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、递减要重复的次数，直到为0
 *    2、使用临时字符串拼接存储当前要重复的字符串
 */
type _Repeat<
  Str extends string = '',
  N extends number = 1,
  _Result extends string = ''  // 辅助参数
> = 
  N extends 0
    ? _Result
    : _Repeat<Str, Subtract<N, 1>, `${_Result}${Str}`>


/**
 * 重复给定的字符串 n 次
 * 
 * @param { string } Str - 要重复的字符串
 * @param { number } N - 重复字符串的次数（默认为 1 ）
 *  
 * @example
 * type Test = Repeat<'*', 3>
 * >>> '***'
 */
export type Repeat<Str extends string = '', N extends number = 1> = _Repeat<Str, N>