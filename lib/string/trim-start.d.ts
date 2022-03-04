/**
 * 移除前面的空格或者指定字符
 * 
 * 注：这里处理方式和 lodash 中的处理方式不太一样
 * lodash 中 TrimStart 是按照单独字符类型 char 删除，而不是 字符串类型 string 模式匹配删除的
 * (具体详情：https://github.com/lodash/lodash/issues/2904) 
 * 而个人感觉按照字符串模式匹配删除才是我想要的，所以将字符串模式匹配删除完成以下功能(TrimEnd同)
 * 
 * 实现思路：直接使用类型推断进行类型分配判断
 * 
 * @example
 * type Test = TrimStart<' abc '>
 * >>> "abc "
 */
export type TrimStart<
  Str extends string,
  Chars extends string = ' '
> = 
  Str extends `${Chars}${infer Rest}`
    ? TrimStart<Rest, Chars>
    : Str