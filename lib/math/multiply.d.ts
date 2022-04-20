import type { Length } from "../helpers/array-length"
import type { BuildArray } from "../helpers/build-array"
import type { Subtract } from "./subtract"
/**
 * [第一步]: 生成指定长度的数组
 * 
 * 直接使用类型工具 BuildArray 生成指定长度的数组
 */


/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：其实就是一个数的几次整体叠加
 *    1、生成指定长度的两个数组
 *    2、判断被乘数(Multiplicand)是否为0（递减被乘数，乘数整体叠加）
 *        a、被乘数为0 - 返回当前暂存数组长度
 *        b、被乘数不为0 - 继续被乘数递减，乘数整体叠加操作
 */
type _Multiply<
  Multiplier extends number,
  Multiplicand extends number,
  _Result extends unknown[] = [] // 辅助参数
> = 
  Multiplicand extends 0
    ? Length<_Result>
    : _Multiply<Multiplier, Subtract<Multiplicand, 1>, [...BuildArray<Multiplier>, ..._Result]>


/**
 * [最后]: 两数相乘
 * 
 * @param { number } Multiplier - 乘数
 * @param { number } Multiplicand - 被乘数
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
export type Multiply<Multiplier extends number, Multiplicand extends number> =
  _Multiply<Multiplier, Multiplicand>