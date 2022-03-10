/**
 * 构建指定长度的数组
 * 主要用于数学操作、获取字符串长度等
 * 
 * @param { number } Len - 需要构建数组的长度
 * @param { unknown[] } _Arr - 暂存的数组（仅内部使用）
 * @return { unknown[] } 构建后的的数组
 * 
 * @example
 * type Test = BuildArray<6>
 * >>> [unknown, unknown, unknown, unknown, unknown, unknown]
 */
export type BuildArray<
  Len extends number,
  _Arr extends unknown[] = []
> = _Arr['length'] extends Len ? _Arr : BuildArray<Len, [..._Arr, unknown]>