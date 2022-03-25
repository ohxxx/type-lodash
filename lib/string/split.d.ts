/**
 * [第一步]: 生成字符串数组
 * 
 * @example
 * type Test = BuildStringArray<[], 'xxx'>
 * >>> ['xxx']
 */
export type BuildStringArray<Arr extends string[], Item extends string> = [...Arr, Item]


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
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路:
 *    1、判断当前字符串是否可以分配给指定分隔符分隔的字符串
 *        a、可以 - 递归字符串，继续匹配
 *        b、不可以 - 进行第二步判断
 *    2、判断当前字符串是否可以分配给分隔符
 *        a、可以 - 返回当前结果集
 *        b、不可以 - 将最后一个字符放入结果集中
 */
type _Split<
  Str extends string,
  Delimiter extends string = '',
  _Result extends string[] = [] // 辅助参数
> = 
  Str extends `${infer First}${Delimiter}${infer Rest}`
    ? _Split<Rest, Delimiter, BuildStringArray<_Result, First>>
    : Str extends Delimiter
      ? _Result
      : BuildStringArray<_Result, Str>


/**
 * [最后]: 按分隔符拆分字符串
 * 
 * @param {} Str - 需要拆分的字符串
 * @param {} Delimiter - 拆分的分隔符（默认为空字符串）
 * @return { string[] } 最后拆分后的结果
 * 
 * @todo: 添加限制结果数量
 * 
 * @example
 * type Test = Split<'xxx_xxx', '_'>
 * >>> ['xxx', 'xxx']
 */
export type Split<
  Str extends string,
  Delimiter extends string = '',
> = _Split<Str, Delimiter>