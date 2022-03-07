import type { Add } from "../math/add"
/**
 * 切片元组，去除元组尾部 N 个元素
 * 
 * 实现思路：
 *    与 Drop 方法一致，只需要将
 *      - Arr extends [infer First, ...infer Rest]
 *      >>> Arr extends [...infer Other, infer Last]
 *    的推断顺序修改一下即可
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @param { number } N - 要删除的元素数（默认是 1 ）
 * @param { number } Index - 辅助索引，用来限制递归边界（内部递归使用）
 * @return { unknown[] } 返回切片后的元组
 * 
 * @example
 * type Test = Drop<[1, 2, 3]>
 * >>> [1, 2]
 */
export type DropRight<
  Arr extends unknown[],
  N extends number = 1,
  Index extends number = 0
> = 
  Index extends N
    ? Arr
    : Arr extends [...infer Other, infer Last]
      ? DropRight<Other, N, Add<Index, 1> & number>
  : Arr