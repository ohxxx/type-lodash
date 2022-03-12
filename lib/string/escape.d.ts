import type { HTMLEntityChars } from "../helpers/constant";

/**
 * 将字符串中的 "&", "<", ">", '"' 和 "'" 字符转成HTML实体字符
 * 
 * 实现思路：（一般进行替换的需求都需要用到模式匹配 + 递归）
 *    1、先定义好要匹配的数据源 HTMLEntityChars
 *    2、使用模式匹配，使用 keyof T 获取 HTMLEntityChars 中的所有索引，判断是否可以匹配成功
 *      a、可以 - 使用 T[Key] 进行索引访问获取匹配值，可以理解成通过key获取map的value值
 *      b、不可以 - 递归后面等待匹配的值 Rest。 重复1、2直到全部匹配完成
 * 
 * 
 * @param { string } Str - 要转译的字符
 * @return { string } 转义后的最终字符
 * 
 * @example
 * type Test = Escape<'fred, barney , & pebbles'>
 * >>> "fred, barney , &amp; pebbles"
 */
export type Escape<Str extends string> = 
  Str extends `${infer First}${infer Rest}`  
    ? First extends keyof HTMLEntityChars
      ? `${HTMLEntityChars[First]}${Escape<Rest>}`
      : `${First}${Escape<Rest>}`
    : Str