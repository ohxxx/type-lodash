import type { Length } from "../helpers/array-length"
import type { Subtract } from "./subtract"
/**
 * [第一步]: 生成指定长度的数组
 * 
 * 直接使用类型工具 BuildArray 生成指定长度的数组
 */



/**
 * [最后]: 两数相除
 * 
 * 实现思路：其实就是相乘的反方向，被除数整体递减
 *    1、生成指定长度的两个数组
 *    2、判断被除数(Dividend)是否为0（被除数递减除数，直到为0，除数不变，当前数组加一）
 *        a、被除数为0 - 返回当前被整除的次数
 *        b、被除数不为0 - 继续第二步判断
 * 
 * 注：目前只实现了整除
 * 
 * 
 * @param { number } Dividend - 被除数
 * @param { number } Divisor - 除数
 * @param { unknown[] } _Result - 操作结果数组（内部使用）
 * @return { number } 两数相除的结果 
 * 
 * @todo:
 *  需要支持的功能
 *    1、大数相除
 *    2、小数相除
 *    3、负数相除
 * 
 * @example
 * type Test = Divide<20, 10>
 * >>> 2
 */
export type Divide<
  Dividend extends number,
  Divisor extends number,
  _Result extends unknown[] = []
> =
  Dividend extends 0
    ? Length<_Result>
    : Divide<Subtract<Dividend, Divisor>, Divisor, [unknown, ..._Result]>