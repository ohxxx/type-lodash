/**
 * 将新元素添加到元组的末尾，并返回新的元组
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @param { any } Element - 需要添加的元素（默认为 unknown ）
 * @return { unknown[] } 返回操作后的元组
 * 
 * @example
 * type Test = Push<[1, '2', 3]>
 * >>> [1, '2', 3, unknown]
 */
export type Push<Arr extends unknown[], Element extends any = unknown> = [...Arr, Element]

