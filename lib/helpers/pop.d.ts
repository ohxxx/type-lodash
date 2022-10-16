/**
 * 删除元组的最后一个元素，并返回改该元素
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @return { unknown } 返回删除的元素
 * 
 * @example
 * type Test = Pop<[1, '2', 3]>
 * >>> 3
 */
export type Pop<Arr extends unknown[]> = 
  Arr extends [...any, infer Last]
    ? Last
    : []
    