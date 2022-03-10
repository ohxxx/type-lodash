/**
 * 将新元素添加到元组组的开头，并返回新的元组
 * 
 * @param { unknown[] } Arr - 需要操作的元组
 * @param { any } Element - 需要添加的元素（默认为 unknown ）
 * 
 * @example
 * type Test = Unshift<[1, '2', 3]>
 * >>> [unknown, 1, '2', 3]
 */
export type Unshift<Arr extends unknown[], Element extends any = unknown> = [Element, ...Arr]

