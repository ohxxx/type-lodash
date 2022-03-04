/**
 * 移除后面的空格或者指定字符
 * 
 * 注意事项与实现思路同 TrimStart，具体详情请移步 TrimStart
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