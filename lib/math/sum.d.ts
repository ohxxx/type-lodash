import type { Length } from "../helpers/array-length";
import type { BuildArray } from "../helpers/build-array";

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、要计算总和就需要生成数组，通过数组的 length 获取长度
 *    2、递归数组变为空，返回临时数组的长度既数组中所有值的总和
 */
type _Sum<
  Arr extends number[],
  _AllArr extends unknown[] = []
> =
  Arr extends [infer First, ...infer Rest]
    ? Rest extends number[]
      ? _Sum<Rest, [..._AllArr, ...BuildArray<First & number>]>
      : Length<_AllArr>
    : Length<_AllArr>


/**
 * 计算数组中值的总和
 * 
 * @param { number[] } Arr - 要循环访问的数组
 * @return { number } 返回总和
 * 
 * @example
 * type Test = Sum<[4, 2, 8, 6]>
 * >>> 20
 */
export type Sum<Arr extends number[]> = _Sum<Arr>
