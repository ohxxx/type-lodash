/**
 * 获取除元组的第一个元素之外的所有元素
 * 
 * 实现思路：与 Initial 方法实现相似
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown[] } 返回处理后的元组
 * 
 * @example
 * type Test = Tail<[1, 2, 3]>
 * >>> [2, 3]
 */
export type Tail<Arr extends unknown[]> = 
  Arr extends [infer _First, ...infer Other]
    ? Other
    : []