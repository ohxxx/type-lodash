/**
 * 获取除元组的最后一个元素之外的所有元素
 * 
 * 实现思路：直接使用类型推断，返回待处理推断的元组
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown[] } 返回处理后的元组
 * 
 * @example
 * type Test = Initial<[1, 2, 3]>
 * >>> [1, 2]
 */
export type Initial<Arr extends unknown[]> = 
  Arr extends [...infer Other, infer Last]
    ? Other
    : []


