import type { HTMLEntityChars } from "../helpers/constant";
import type { StartsWith } from "./starts-with";
/**
 * 反转 HTML实体字符 中的 key 和 value
 */
type StringChars = {
  [Key in keyof HTMLEntityChars as HTMLEntityChars[Key]]: Key
}


/**
 * 将字符串中的 &amp;, &lt;, &gt;, &quot;,和 &#39; HTML实体字符转成字符
 * 
 * 实现思路：
 *    1、整体与 Escape 一致
 *    2、不同点
 *      a、不能匹配单个字符，要匹配 &xxx; 这整个字符
 *      b、HTMLEntityChars 不能直接用了，要进行 key 与 value 的反转才能进行匹配
 *      c、要处理特殊情况 &&amp; 这种情况 
 *      d、匹配不匹配都要添加包裹层 & 与 ; 
 *      e、特别注意 &quot; >>> \" 匹配后会有转义字符，但是其实没有影响
 * 
 * 
 * @param { string } Str - 要转译的字符
 * @return { string } 转义后的最终字符
 * 
 * @example
 * type Test = Unescape<'fred, barney, &amp; pebbles'>
 * >>> "fred, barney, & pebbles"
 */
export type Unescape<Str extends string> = 
  Str extends `${infer First}&${infer Value};${infer Rest}`
    ? StartsWith<Value, '&'> extends true
      ? `${First}&${Unescape<`${Value};`>}${Unescape<Rest>}`
      : `&${Value};` extends keyof StringChars
        ? `${First}${StringChars[`&${Value};`]}${Unescape<Rest>}`
        : `${First}&${Value};${Unescape<Rest>}`
    : Str