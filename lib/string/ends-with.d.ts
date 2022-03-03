import type { BuildStringArray, Split } from './split'
/**
 * [第一步]: 拆分字符串组成数组
 * 
 * 不能使用 Split 因为需要构建一个以 null 开头的数组
 * 如：'abc' >>> [null, 'a', 'b', 'c']
 * 
 * @example
 * type Test = SplitString<'halo'>
 * >> [null, "h", "a", "l", "o"]
 */
type SplitString<
  Str extends string,
  Result extends any[] = [null]
> = 
  Str extends `${infer First}${infer Rest}`
    ? SplitString<Rest, BuildStringArray<Result, First>>
    : Str extends ''
      ? Result
      : BuildStringArray<Result, Str>


/**
 * [第二步]: 获取指定下标的字符串
 * 
 * @example
 * type Test = GetIndexString<'abc', 1>
 * >>> b
 */
type GetIndexString<
  Str extends string,
  Position extends number,
> =
  SplitString<Str>[Position] extends string
    ? SplitString<Str>[Position]
    : null


/**
 * [最后]: 判断字符串是否以给定的目标字符串结尾
 * 
 * 
 * 与StartsWith不同点：
 *    1、position 默认位置 - 字符串长度
 *    2、position 初始数字 - StartsWith 是 0，EndsWith 是 1
 * 解决不同：
 *    1、组成一个以 null 默认开头的数组 - 解决初始数字问题
 *    2、使用 Split 构建原始数组 - 解决默认位置问题
 * 
 * 
 * 实现思路（与 StartsWith 实现方法一致）:
 *    1、将字符串转成数组
 *    2、获取指定下标的字符
 *    3、判断通过下标得到的字符是否可以分配给目标字符
 *        a、可以 - 返回 true
 *        b、不可以 - 返回 false
 * 
 * 
 * @example
 * type Test1 = EndsWith<'foobar', 'r'>
 * >>> true
 * type Test2 = EndsWith<'abc', 'b', 1>
 * >>> false
 */
export type EndsWith<
  Str extends string,
  Target extends string,
  Position extends number = Split<Str>['length']
> = GetIndexString<Str, Position> extends Target
  ? true
  : false