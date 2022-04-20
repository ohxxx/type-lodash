import type { Length } from "../helpers/array-length"
import type { Cast } from "../helpers/cast"
import type { Add } from "../math/add"

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、使用递归，暂存元组
 *    2、往暂存元组中按照索引添加元素，直到暂存元组长度等于原始元组长度
 *    3、使用 Add 不断叠加当前索引
 */
type _Reverse<
  Arr extends unknown[],
  _Index extends number = 0,  // 辅助参数
  _Result extends unknown[] = []  // 辅助参数
> = 
  Length<_Result> extends Length<Arr>
    ? _Result
    : _Reverse<Arr, Cast<Add<_Index, 1>, number>, [Arr[_Index], ..._Result]>

/**
 * 反转元组
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown[] } 反转后的元组
 * 
 * @example
 * type Test = Reverse<[1, 2, 3, '4', '5']>
 * >>> ['5', '4', 3, 2, 1]
 */
export type Reverse<Arr extends unknown[]> = _Reverse<Arr>
