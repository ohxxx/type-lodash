import type { StringConvert } from '../helpers/string-convert'
import type { ToLower } from './to-lower'
import type { TrimEnd } from './trim-end'
/**
 * 分隔符
 */
type Delimiter = '_'


/**
 * 将字符串转换为蛇形大小写
 * 
 * 实现思路：模式匹配 + 递归
 * 使用公共方法 StringConvert 进行字符串转换
 * 
 * 需要注意：
 *    1、指定符号、字母、数字及其他符号使用分隔符隔开
 *    2、StringConvert 处理完成后进行整字符 小写 转换
 *    3、结尾需要进行去分隔符处理（模式匹配问题）
 * 
 * 
 * @param { string } - 要转换的字符串
 * @return { string } 转换后蛇大小写的字符串
 * 
 * @example
 * type Test = SnakeCase<'Foo Bar'>
 * >>> 'foo_bar'
 */
export type SnakeCase<Str extends string> = TrimEnd<ToLower<StringConvert<Str, Delimiter>>, Delimiter>