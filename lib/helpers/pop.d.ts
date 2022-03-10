/**
 * 删除元组的最后一个元素，并返回该元素
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @return { unknown[] } 返回操作后的元组
 * 
 * @example
 * type Test = Pop<[1, '2', 3]>
 * >>> 3
 */
export type Pop<Arr extends unknown[]> = 
  Arr extends [...infer _Other, infer Last]
    ? Last
    : undefined

