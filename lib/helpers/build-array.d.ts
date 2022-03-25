import type { Length } from "./array-length";

/**
 * 内部实现，私有操作不对外暴露
 */
type _BuildArray<
  Len extends number,
  _Arr extends unknown[] = [] // 辅助参数
> = Length<_Arr> extends Len ? _Arr : _BuildArray<Len, [..._Arr, unknown]>


/**
 * 构建指定长度的数组
 * 主要用于数学操作、获取字符串长度等
 * 
 * @param { number } Len - 需要构建数组的长度
 * @return { unknown[] } 构建后的的数组
 * 
 * @example
 * type Test = BuildArray<6>
 * >>> [unknown, unknown, unknown, unknown, unknown, unknown]
 */
export type BuildArray<Len extends number> = _BuildArray<Len>