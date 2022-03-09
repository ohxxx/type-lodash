/**
 * 将字符串的第一个字符转换为小写
 * 
 * 实现思路：直接使用类型推断进行类型分配判断
 * 
 * 
 * @param { string } Str - 要转换的字符串
 * @return { string } 转换后的字符串
 * 
 * @example
 * type Test = LowerFirst<'Fred'>
 * >>> 'fred'
 */
export type LowerFirst<Str extends string = ''> = 
  Str extends `${infer First}${infer Other}`
    ? `${Lowercase<First>}${Other}`
    : ''