/**
 * 返回元组最后一个元素
 * 
 * 实现思路：
 *    直接使用类型推断，获取最后一个元素，否则返回 undefined
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown } 元组中最后一个元素，没有就返回 undefined
 * 
 * @example
 * type Test = Last<[1, 2, 3]>
 * >>> 3
 */
export type Last<Arr extends unknown[]> = 
  Arr extends [...any, infer Last]
    ? Last
    : undefined