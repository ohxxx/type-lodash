import type { Length } from "../helpers/array-length"
import type { Cast } from "../helpers/cast"
import type { Last } from "../array/last"
import type { Pop } from "../helpers/pop"
import type { Add } from "./add"
import type { Divide } from "./divide"

/**
 * 求数组平均数
 * 
 * 实现思路：（可以用 Add 与 Divide）
 *    1、出栈数组中的每一个元素，并且得到最新的数组
 *    1、数组中所有数相加的和除以 2
 * 
 * 注：现在只支持偶数的平均值
 * 
 * 
 * @param { number[] } Arr - 需要处理的数组
 * @param { number } Count - 数组内相加后的数值
 * @return { number } 最后的平均值
 * 
 * @todo：
 *    1、支持奇数的平均值
 *    2、支持小数的平均值
 *    3、支持大数的平均值
 * 
 * @example
 * type Test = Mean<[4, 2]>
 * >>> 3
 */
export type Mean<
  Arr extends number[],
  Count extends number = 0,
> =
  Length<Arr> extends 0
    ? Divide<Count, 2>
    : Mean<Pop<Arr>, Cast<Add<Count, Cast<Last<Arr>, number>>, number>>
