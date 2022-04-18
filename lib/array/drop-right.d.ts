import type { Cast } from "../helpers/cast"
import type { Add } from "../math/add"

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    与 Drop 方法一致，只需要将
 *      - Arr extends [infer First, ...infer Rest]
 *      >>> Arr extends [...infer Other, infer Last]
 *    的推断顺序修改一下即可
 */
type _DropRight<
  Arr extends unknown[],
  N extends number = 1,
  _Index extends number = 0 // 辅助参数
> = 
  _Index extends N
    ? Arr
    : Arr extends [...infer Other, infer _Last]
      ? _DropRight<Other, N, Cast<Add<_Index, 1>, number>>
  : Arr

/**
 * 切片元组，去除元组尾部 N 个元素
 * 
 * @param { unknown[] } Arr - 当前元组
 * @param { number } N - 要删除的元素数（默认是 1 ）
 * @return { unknown[] } 返回切片后的元组
 * 
 * @example
 * type Test = Drop<[1, 2, 3]>
 * >>> [1, 2]
 */
export type DropRight<Arr extends unknown[], N extends number = 1> = _DropRight<Arr, N>