import type { StringConvert } from '../helpers/string-convert'
import type { ToUpper } from './to-upper'
import type { TrimEnd } from './trim-end'
/**
 * 分隔符
 */
type Delimiter = ' '


/**
 * 将字符串（作为空格分隔的单词）转换为大写
 * 
 * 实现思路：模式匹配 + 递归
 * 使用公共方法 StringConvert 进行字符串转换
 * 
 * 需要注意：
 *    1、指定符号、字母、数字及其他符号使用分隔符隔开
 *    2、StringConvert 处理完成后进行整字符 大写 转换
 *    3、结尾需要进行去分隔符处理（模式匹配问题）
 * 
 * 
 * @param { string } - 要转换的字符串
 * @return { string } 转换后大写的字符串
 * 
 * @example
 * type Test = UpperCase<'Foo Bar'>
 * >>> 'FOO BAR'
 */
export type UpperCase<Str extends string> = TrimEnd<ToUpper<StringConvert<Str, Delimiter>>, Delimiter>