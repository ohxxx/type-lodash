/**
 * 检查 X 和 Y 的类型，相等返回该类型，不等返回 never
 * 
 * 
 * @param {unknown} X - 要匹配检查的第一个类型
 * @param {unknown} Y - 要匹配检查的第二个类型
 * 
 * @example
 * type Test1 = Cast<number, number>
 * >>> number
 * type Test2 = Cast<string, number>
 * >>> never
 */
export type Cast<X, Y> = X extends Y ? X : never