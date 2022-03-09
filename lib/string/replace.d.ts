/**
 * 替换字符串中要替换的字符串替换成要匹配替换的字符串
 * 上面为绕口令，其实就是 String 方法的 replace 方法的类型实现
 * 
 * lodash 中 Pattern 支持正则，Replacement 支持 function
 * 但是 ts 好像没有办法进行实现，不如展望一下未来
 * 
 * 实现思路：递归 + 类型推断，一看就会系列
 * 
 * 
 * @param { string } Str - 要修改的字符串
 * @param { number } Pattern - 要替换的字符串
 * @param { string } Replacement - 要匹配替换的字符串
 *  
 * @example
 * type Test =  Replace<'Hi Fred', 'Fred', 'Barney'>
 * >>> 'Hi Barney'
 */
export type Replace<
  Str extends string,
  Pattern extends string,
  Replacement extends string
> = 
  Pattern extends ''
    ? Str
    : Str extends `${infer First}${Pattern}${infer Other}`
      ? Replace<`${First}${Replacement}${Other}`, Pattern, Replacement>
      : Str

