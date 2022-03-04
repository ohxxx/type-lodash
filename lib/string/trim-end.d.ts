/**
 * 移除后面的空格或者指定字符
 * 
 * 注意事项与实现思路同 TrimStart，具体详情请移步 TrimStart
 * 
 * 
 * @param { string } Str - 要处理的字符串
 * @param { string } Chars - 要移除的字符
 * @return { string } 处理后的字符串
 * 
 * @example
 * type Test = TrimEnd<' abc '>
 * >>> " abc"
 */
export type TrimEnd<
  Str extends string,
  Chars extends string = ' '
> = 
  Str extends `${infer Rest}${Chars}`
    ? TrimEnd<Rest, Chars>
    : Str