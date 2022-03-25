import type { Add } from "../math/add"
/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、使用辅助索引，判断辅助索引与当前要删除的个数是否相同
 *      a、相同 - 返回当前的最新的元组
 *      b、不相同 - 执行第二步
 *    2、使用类型推断，将元组拆分，相当于出栈一次，继续递归，直到运行到 1a
 */
type _Drop<
  Arr extends unknown[],
  N extends number = 1,
  _Index extends number = 0 // 辅助参数
> = 
_Index extends N
  ? Arr
  : Arr extends [infer _First, ...infer Rest]
    ? _Drop<Rest, N, Add<_Index, 1> & number>
    : Arr

/**
 * 切片元组，去除元组前面 N 个元素
 * 
 * @param { unknown[] } Arr - 当前元组
 * @param { number } N - 要删除的元素数（默认是 1 ）
 * @return { unknown[] } 返回切片后的元组
 * 
 * @example
 * type Test = Drop<[1, 2, 3], 2>
 * >>> [3]
 */
export type Drop<Arr extends unknown[], N extends number = 1> = _Drop<Arr, N>