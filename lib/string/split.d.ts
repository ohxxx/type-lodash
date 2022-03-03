/**
 * [第一步]: 生成字符串数组
 * 
 * @example
 * type Test = BuildStringArray<[], 'xxx'>
 * >>> ['xxx']
 */
type BuildStringArray<Arr extends string[], Item extends string> = [...Arr, Item]


/**
 * [第二步]: 匹配是否存在指定分符分割的字符串
 * 
 * @example
 * type Test = MatchDelimiter<'xxx-xxx', '-'>
 * >>> true
 */
// type MatchDelimiter<
//   Str extends string,
//   Delimiter extends string = ''
// > = Str extends `${infer First}${Delimiter}${infer Rest}`
//   ? true
//   : false



/**
 * [最后]: 按分隔符拆分字符串
 * 
 * 实现思路:
 *    1、判断当前字符串是否可以分配给指定分隔符分隔的字符串
 *        a、可以 - 递归字符串，继续匹配
 *        b、不可以 - 进行第二步判断
 *    2、判断当前字符串是否可以分配给分隔符
 *        a、可以 - 返回当前结果集
 *        b、不可以 - 将最后一个字符放入结果集中
 * 
 * @example
 * type Test = Split<'xxx_xxx', '_'>
 * >>> ['xxx', 'xxx']
 */
export type Split<
  Str extends string,
  Delimiter extends string = '',
  Result extends string[] = []
> = 
  Str extends `${infer First}${Delimiter}${infer Rest}`
    ? Split<Rest, Delimiter, BuildStringArray<Result, First>>
    : Str extends Delimiter
      ? Result
      : BuildStringArray<Result, Str>