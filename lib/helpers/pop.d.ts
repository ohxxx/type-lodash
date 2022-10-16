/**
 * 删除元组的最后一个元素，并返回新元组
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @return { unknown[] } 返回操作后的元组
 * 
 * @example
 * type Test = Pop<[1, '2', 3]>
 * >>> [1, "2"]
 */
export type Pop<Arr extends unknown[]> = 
  Arr extends [...infer Other, any]
    ? Other
    : []
    