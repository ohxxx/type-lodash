import type { Length } from "../helpers/array-length";

/**
 * 假值
 */
type Falsy = false | null | 0 | "" | undefined;


/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *   第一种：
 *      1、将元组转成联合类型
 *      2、利用联合类型作为条件参数触发分布式条件特性，判断是否可以分配到 Falsey
 *      3、将最后的联合类型转成元组
 *   第二种：（目前使用的）
 *      1、使用递归判断，创建临时结果元组
 *      2、判断当前的元组长度
 *          a、等于0 - 返回结果元组
 *          b、不等于0 - 执行第三步
 *      3、利用类型推断，递归判断
 */
type _Compact<
  Arr extends unknown[],
  _Result extends unknown[] = [] // 辅助参数
> = 
  Length<Arr> extends 0
    ? _Result
    : Arr extends [infer First, ...infer Rest]
      ? First extends Falsy
        ? _Compact<Rest, _Result>
        : _Compact<Rest, [..._Result, First]>
      : _Result
    

/**
 * 返回一个非假值的元组
 * （假值包含：false、null、0、""、undefined）
 * 
 * @param { unknown[] } Arr - 当前元组
 * @return { unknown[] } 最后的结果元组
 * 
 * @example
 * type Test = Compact<[0, 1, false, true, null, undefined, "", "3"]>
 * >>> [1, true, "3"]
 */
export type Compact<Arr extends unknown[]> = _Compact<Arr>