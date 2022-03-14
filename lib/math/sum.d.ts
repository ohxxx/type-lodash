import type { BuildArray } from "../helpers/build-array";
/**
 * 计算数组中值的总和
 * 
 * 实现思路：
 *    1、要计算总和就需要生成数组，通过数组的 length 获取长度
 *    2、递归数组变为空，返回临时数组的长度既数组中所有值的总和
 * 
 * 
 * @param { number[] } Arr - 要循环访问的数组
 * @param { unknown[] } _AllArr - 暂存的数组（仅内部使用）
 * @return { number } 返回总和
 * 
 * @example
 * type Test = Sum<[4, 2, 8, 6]>
 * >>> 20
 */
export type Sum<
  Arr extends number[],
  _AllArr extends unknown[] = []
> =
  Arr extends [infer First, ...infer Rest]
    ? Rest extends number[]
      ? Sum<Rest, [..._AllArr, ...BuildArray<First & number>]>
      : _AllArr['length']
    : _AllArr['length']
