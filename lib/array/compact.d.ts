/**
 * 返回一个非假值的元组
 * （假值包含：false、null、0、""、undefined）
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
 * 
 * 
 * @param { unknown[] } Arr - 当前元组
 * @param { unknown[] } Result - 非假值元组（内部递归使用）
 * @return { unknown[] } 最后的结果元组
 * 
 * @example
 * type Test = Compact<[0, 1, false, true, null, undefined, "", "3"]>
 * >>> [1, true, "3"]
 */
type Falsey = false | null | 0 | "" | undefined;

export type Compact<
  Arr extends unknown[],
  Result extends unknown[] = []
> = 
  Arr['length'] extends 0
    ? Result
    : Arr extends [infer First, ...infer Rest]
      ? First extends Falsey
        ? Compact<Rest, Result>
        : Compact<Rest, [...Result, First]>
      : Result