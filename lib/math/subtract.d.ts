import type { BuildArray } from '../helpers/build-array'
/**
 * [第一步]: 生成指定长度的数组
 * 
 * 直接使用类型工具 BuildArray 生成指定长度的数组
 */


/**
 * [最后]: 两数相减
 * 
 * 实现思路：
 *    1、生成指定长度的两组数组
 *    2、使用infer的特性，进行差集推断
 * 
 * 注：现在只支持1000以内的整数相减
 * 
 * 
 * @param { number } Minuend - 被减数
 * @param { number } Subtrahend - 减数
 * @return { number } 两数相减后的值
 * 
 * @todo:
 *    1、大数相减: 1001 - 1000
 *    2、小数相减: 1.0 - 0.5
 *    3、负数相减: -20 - 1
 * 
 * @example
 * type Test = Subtract<8, 2>
 * >>> 6
 */
export type Subtract<
  Minuend extends number,
  Subtrahend extends number
> =
  BuildArray<Minuend> extends [...BuildArray<Subtrahend>, ...infer Rest]
  ? Rest['length']
  : never