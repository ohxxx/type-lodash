import type { ASCIISymbol } from "../helpers/constant";
import type { LowerFirst } from "./lower-first";
import type { ToLower } from "./to-lower";
import type { ToUpper } from "./to-upper";

/**
 * 将字符串转换为驼峰式大小写
 * 
 * 看了一下 lodash 的实现：replace + reduce
 * 其实用 ts 的话也就是 模式匹配 + 递归 处理
 * 但是源码中还使用了 unicode 与 ascii 的匹配转换规则
 * 所以这里我准备将所有出现的规则列举出，并进行模式匹配处理
 * 
 * 出现场景：
 *    1、
 * 
 * 
 * 实现思路：（整体思路如上述）
 *    1、进行模式匹配
 *    2、递归处理
 */
type _CamelCase<Str extends string> =
  Str extends `${infer First}${infer Second}${infer Rest}`
    ? First extends ASCIISymbol
      ? Second extends ASCIISymbol
        ? _CamelCase<`${Second}${Rest}`>
        : _CamelCase<`${ToUpper<Second>}${Rest}`>
      : `${First}${_CamelCase<`${ToLower<Second>}${Rest}`>}`
    : Str extends ASCIISymbol
      ? ''
      : Str

export type CamelCase<Str extends string> =
  LowerFirst<_CamelCase<Str>>

// TODO：大小写场景问题
type Test = CamelCase<'AaBbCc'>
// aaBbCc