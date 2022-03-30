/**
 * 将 字符串 转成 数字
 * 
 * 因为受递归深度影响，所以现在暂时只支持 >= 999 的数字
 * 
 * @param {string} str - 要转成数字的字符串
 * 
 * @example
 * type Test = ToNumber<'666'>
 * >>> 666
 */
type _ToNumber<
  Str extends string,
  _Arr extends unknown[] = []
> = 
  Str extends `${_Arr['length']}`
    ? _Arr['length']
    : _ToNumber<Str, [..._Arr, unknown]>

export type ToNumber<Str extends string> = _ToNumber<Str>
    