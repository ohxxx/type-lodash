/**
 * 删除元组的第一个元素，并返回该元素
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @return { unknown[] } 返回操作后的元组
 * 
 * @example
 * type Test = Shift<[1, '2', 3]>
 * >>> 1
 */
export type Shift<Arr extends unknown[]> = 
  Arr extends [infer First, ...infer _Rest]
    ? First
    : undefined

