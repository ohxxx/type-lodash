import type { Drop } from './drop'

/**
 * 内部实现，私有操作不对外暴露
 * 
 * 
 * 实现思路：
 *    1、弹出元组中的第一个元素
 *    2、将弹出的元素使用分隔符号拼接到结果字符串 Result 中
 *    3、递归，添加边界判断，特别要处理一下 Result 初始化为空的情况
 */
type _Join<
  Arr extends any[],
  Separator extends string = ',',
  _Result extends string = '' // 辅助参数
> =
Arr extends []
  ? _Result
  : _Join<
      Drop<Arr>,
      Separator,
      _Result extends ''
        ? `${_Result}${Arr[0]}` 
        : `${_Result}${Separator}${Arr[0]}`
    >


/**
 * 将元组中的所有元素转换为由分隔符分隔的字符串
 * 
 * @param { number[] } Arr - 需要处理的元组
 * @param { string } Separator - 元素分隔符
 * @return { number } 最后的平均值
 * 
 * @example
 * type Test = Join<['a', 'b', 'c'], '~'>
 * >>> 'a~b~c'
 */
export type Join<Arr extends any[], Separator extends string = ','> = _Join<Arr, Separator>