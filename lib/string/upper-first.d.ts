/**
 * 将字符串的第一个字符转换为大写
 * 
 * 实现思路：与 LowerFirst 相同，直接使用类型推断进行类型分配判断
 * 
 * 
 * @param { string } Str - 要转换的字符串
 * @return { string } 转换后的字符串
 * 
 * @example
 * type Test = UpperFirst<'fred'>
 * >>> 'Fred'
 */
export type UpperFirst<Str extends string = ''> = 
  Str extends `${infer First}${infer Other}`
    ? `${Uppercase<First>}${Other}`
    : ''