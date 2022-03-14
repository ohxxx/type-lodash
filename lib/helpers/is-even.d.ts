import type { Divide } from "../math/divide";

/**
 * 是否是偶数
 * 
 * 
 * @param { number } N - 需要判断的数字
 * 
 * @example
 * type Test = IsEven<10>
 * >>> true
 */
export type IsEven<N extends number> = Divide<N, 2> extends never ? false : true;
