/**
 * 返回元组第一个元素
 * 
 * 实现思路：
 *    （与 Last 类似）直接使用类型推断，获取第一个元素，否则返回 undefined
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown } 元组中第一个元素，没有就返回 undefined
 * 
 * @example
 * type Test = Head<[1, 2, 3]>
 * >>> 1
 */
export type Head<Arr extends unknown[]> = 
  Arr extends [infer First, ...infer Rest]
    ? First
    : undefined