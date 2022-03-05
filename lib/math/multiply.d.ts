import type { BuildArray } from "../helpers/build-array"
import type { Subtract } from "./subtract"
/**
 * [最后]: 两数相乘
 * 
 * 实现思路：其实就是一个数的几次整体叠加
 *    1、生成指定长度的两个数组
 *    2、判断被乘数(Multiplicand)是否为0（递减被乘数，乘数整体叠加）
 *        a、被乘数为0 - 返回当前暂存数组长度
 *        b、被乘数不为0 - 继续被乘数递减，乘数整体叠加操作
 * 
 * 
 * @param { number } Multiplier - 乘数
 * @param { number } Multiplicand - 被乘数
 * @param { unknown[] } Result - 操作结果数组（内部使用）
 * @return { number } 两数相乘的结果 
 * 
 * @todo:
 *  需要支持的功能
 *    1、大数相乘
 *    2、小数相乘
 *    3、负数相乘
 * 
 * @example
 * type Test = Multiply<11, 6>
 * >>> 66
 */
export type Multiply<
  Multiplier extends number,
  Multiplicand extends number,
  Result extends unknown[] = []
> = 
  Multiplicand extends 0
    ? Result['length']
    : Multiply<Multiplier, Subtract<Multiplicand, 1>, [...BuildArray<Multiplier>, ...Result]>