import { Add } from "../math/add"

/**
 * 反转元组
 * 
 * 实现思路：
 *    1、使用递归，暂存元组
 *    2、往暂存元组中按照索引添加元素，直到暂存元组长度等于原始元组长度
 *    3、使用 Add 不断叠加当前索引
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @param { number } Index - 当前索引（内部递归使用）
 * @param { unknown[] } 当前结果值（内部递归使用）
 * 
 * @example
 * type Test = Reverse<[1, 2, 3, '4', '5']>
 * >>> ['5', '4', 3, 2, 1]
 */
export type Reverse<
  Arr extends unknown[],
  Index extends number = 0,
  Result extends unknown[] = []
> = 
  Result['length'] extends Arr['length']
    ? Result
    : Reverse<Arr, (Add<Index, 1> & number), [Arr[Index], ...Result]>
