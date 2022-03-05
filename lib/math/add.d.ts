import type { BuildArray } from "../helpers/build-array";
/**
 * [第一步]: 构建指定长度的数组
 * 
 * 直接使用类型工具 buildArray 生成指定长度的数组
 */



/**
 * [最后]: 两数相加
 * 
 * 实现思路：
 *    1、生成由两个数字长度生成的两个数组
 *    2、合并两个数组，返回长度
 * 
 * 
 * 注：现在只支持1000以内的整数相加
 * 
 * 
 * @param { number } Augend - 第一个数字
 * @param { number } Addend - 第二个数字
 * @return { number } 两数相加之和 
 * 
 * @todo:
 *  需要支持的功能
 *    1、大数相加: 66666666 + 99999999
 *    1、小数相加: 1.2 + 1.5
 *    2、负数加减: -1 + 2
 * 
 * @example
 * type Test = Add<2, 3>
 * >>> 5
 * 
 */
export type Add<
  Augend extends number,
  Addend extends number
> = [...BuildArray<Augend>, ...BuildArray<Addend>]['length']