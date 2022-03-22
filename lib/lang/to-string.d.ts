import type { IsObject } from "./is-object"
import type { IsMap } from './is-map';
import type { IsWeakMap } from "./is-weak-map";
import type { IsSet } from "./is-set";
import type { IsWeakSet } from "./is-weak-set";
import type { IsError } from "./is-error";
import type { Drop } from "../array/drop";
import type { TrimEnd } from "../string/trim-end";
import type { Length } from "../helpers/array-length";
/**
 * 可以直接转成字符串的类型
 */
type Stringified = string | number | bigint | boolean


/**
 * 对象的字符串形式集合
 */
type ObjString = {
  'obj': '[object Object]'
  'map': '[object Map]'
  'weakMap': '[object WeakMap]'
  'set': '[object Set]'
  'weakSet': '[object WeakSet]'
}


/**
 * 对象转 string 处理
 */
type ObjectToString<T> = 
  IsMap<T> extends true ? ObjString['map'] :
  IsWeakMap<T> extends true ? ObjString['weakMap'] :
  IsSet<T> extends true ? ObjString['set'] :
  IsWeakSet<T> extends true ? ObjString['weakSet'] :
  IsError<T> extends true ? 'Error' :
  IsObject<T> extends true ? ObjString['obj'] :
  T

/**
 * 分隔符
 */
type Delimiter = ','

/**
 * Tuple 类型转 string
 * 不能直接使用 Join 进行拼接处理
 * 因为 Tuple 中可能会有嵌套的情况
 */
type TupleToString<
  Arr extends any[],
  _Result extends string = ''
> = 
  Length<Arr> extends 0
    ? TrimEnd<_Result, ','>
    : TupleToString<
        Drop<Arr>,
        `${_Result}${ObjectToString<Arr[0]>}${Delimiter}`
      >


/**
 * 将值转换为字符串
 * 为空值和未定义值返回一个空字符串。 -0 的符号被保留
 * 
 * 实现思路：
 *    1、先判断可以直接转换为字符串的类型 Stringified
 *    2、如果不能直接转换
 *      a、是否是 null ｜ undefined  - 转成 ''
 *      b、是否是元组 - 执行 TupleToString
 *      c、是否是对象 - 执行 ObjectToString
 *          1、是对象 - 匹配 ObjString 中的 value
 *          2、不是对象 - 返回原始值
 * 
 * @param { any } T - 要转换的值
 * @return { string } 返回转换后的字符串
 * 
 * @todo：
 *    1、元组嵌套支持
 *    2、元组连续空字符支持
 *    3、symbol支持
 * 
 * @example
 * type Test = ToString<6>
 * >>> '6'
 */
export type ToString<T> = 
  T extends Stringified
    ? `${T}`
    : NonNullable<T> extends never
      ? ''
      : T extends unknown[]
        ? TupleToString<T>
        : ObjectToString<T>
