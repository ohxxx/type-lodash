import type { TrimStart } from './trim-start'
import type { TrimEnd } from './trim-end'

/**
 * 移除前面和后面的空格或者指定字符
 * 
 * 实现思路：使用 TrimStart 去头，TrimEnd 去尾
 * 
 * 
 * @param { string } Str - 要处理的字符串
 * @param { string } Chars - 要移除的字符
 * @return { string } 处理后的字符串
 * 
 * @example
 * type Test = Trim<'aabcbaa', 'a'>
 * >>> "bcb"
 */
export type Trim<
  Str extends string,
  Chars extends string = ' '
> = TrimStart<TrimEnd<Str, Chars>, Chars>