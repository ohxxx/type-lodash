import type { Length } from "../helpers/array-length";
import type { Cast } from "../helpers/cast";
import type { Add } from "../math/add";

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：长度判断 + 递归
 *    0、使用辅助参数 _Result 进行填充操作
 *    1、进行填充的规则
 *        a、在 Start 与 End 之间填充 Value
 *        b、在 Start 与 End 之外的填充 原索引下的值
 *    2、长度判断的规则及边界处理
 *        a、Start 等于 End，就将最新的 _Result + 剩余 Arr 中的值合并返回
 *        b、Start 不等于 End（也就是触发了 1 中的判断逻辑）
 *            i、当前 _Result 的长度等于 Start，就填充 Value，并将 Start 进行 + 1（重点）
 *            ii、当前 _Result 的长度不等于 Start，就填充 原索引下的值
 * 
 */
type _Fill<
  Arr extends unknown[],
  Value extends unknown,
  Start extends number = 0,
  End extends number = Length<Arr>,
  _Result extends unknown[] = []
> = 
  Arr extends [infer First, ...infer Rest]
    ? Start extends End
      ? [..._Result, ...Arr]
      : Length<_Result> extends Start
        ? _Fill<Rest, Value, Cast<Add<Start, 1>, number>, End, [..._Result, Value]>
        : _Fill<Rest, Value, Start, End, [..._Result, First]>
    : _Result


/**
 * 填充元素到元组中
 * 用从开始到结束的值填充元组的元素，但不包括结束
 * 
 * @param { unknown[] } Arr - 要填充的元组
 * @param { unknown } Value - 填充的值
 * @param { number } Start - 开始的索引（默认是 0 ）
 * @param { number } End - 结束的索引（默认是元组长度）
 * @return { unknown[] } 返回填充后的元组
 * 
 * @todo：
 *    1、支持负数填充：Fill<[1, 2, 3], 'x', -1>
 * 
 * @example
 * type Test = Fill<[1, 2, 3], 'x', 0, 2>
 * >>> ["x", "x", 3]
 */
export type Fill<
  Arr extends unknown[],
  Value extends unknown,
  Start extends number = 0,
  End extends number = Length<Arr>
> = _Fill<Arr, Value, Start, End>