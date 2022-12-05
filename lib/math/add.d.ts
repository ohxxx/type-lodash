import { Length } from "../helpers/array-length";
import { BuildArray } from "../helpers/build-array";
import { Cast } from "../helpers/cast";
import { ArabicFigures } from "../helpers/constant";
import { Pop } from "../helpers/pop";
import { ToString } from "../lang/to-string";

type Number = `${ArabicFigures}`

type _Join<T extends Number[]> = T extends [] ? "" : `${_Join<Pop<T>>}${_Last<T, 'string'>}`;

type _Split<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ..._Split<Rest>]
  : [];

type _Last<T extends unknown[], U extends 'string' | 'number' | 'default' = 'default'> =
  T extends [...any, infer Last]
    ? Last
    : U extends 'string' ? ""
    : U extends 'number' ? 0
    : undefined;
  
type _ToNumber<Str extends string> =
  Str extends `${infer N extends number}` ? N : 0

type SingleDigit = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
]

type TenDigit = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

type NumberToTuple<N extends number> = _Split<ToString<N>>;

type EmptyTuples<F extends Number[], S extends Number[]> =
  F extends [] ? true : S extends [] ? true : false;
      
type Carry = 0 | 1

type Ten<
  T extends Carry,
  F extends number,
  S extends number
> = TenDigit[F][S] extends 1
  ? 1
  : [SingleDigit[F][S], T] extends [9, 1]
    ? 1
    : 0;

type Other<F extends Number[], S extends Number[]> =
  F extends [] ? S : S extends [] ? F : [];

type PlusOne<N extends number> = Length<[...BuildArray<N>, unknown]>

type Complement<
  A extends Number[],
  T extends Carry = 0,
> = A extends []
  ? T extends 1
    ? ['1']
    : []
  : T extends 1
    ? _Split<Cast<ToString<PlusOne<_ToNumber<_Join<A>>>>, string>>
    : A

type ThreeAdd<C extends Carry, N1 extends number, N2 extends number> = 
  C extends 1
    ? SingleDigit[N1][N2] extends 9
      ? 0
      : PlusOne<SingleDigit[N1][N2]>
    : SingleDigit[N1][N2]
    
type TupleAdd<
  F extends Number[],
  S extends Number[], 
  C extends Carry = 0,
  Res extends Number[] = []
> = EmptyTuples<F, S> extends true
  ? [...Complement<Other<F, S>, C>, ...Res]
  : TupleAdd<
      Pop<F>,
      Pop<S>,
      Ten<C, _ToNumber<_Last<F, 'string'>>, _ToNumber<_Last<S, 'string'>>>,
      Cast<[ToString<ThreeAdd<C, _Last<F, 'number'>, _Last<S, 'number'>>>, ...Res], Number[]>
    >

type JoinTuple<
  First extends number,
  Second extends number
> = _Join<TupleAdd<NumberToTuple<First>, NumberToTuple<Second>>>

/**
 * 两数相加
 * 
 * 实现思路：
 *    1、将两个数字转换为元组
 *      如：
 *        209 >>> ['2', '0', '9']
 *        93  >>> ['9', '3']
 *    2、对两个元组进行递归，将每一位相加
 *      a、如果两个中有一个为空，则将另一个元组的剩余部分拼接到结果中，如果有进位，则剩余部分 +1
 *      b、如果两个元组都不为空，则将两个元组的最后一位相加，相加结果大于 9 则进位
 *      c、一直递归直到有一个元组为空返回结果
 *  
 *  注1：这里使用的_Join、_Split、_Last、_ToNumber等方法都是内部方法，因为公共的实现的没办法很好的收窄类型
 *      所以这里使用了内部方法，仅作为该功能的实现
 *  注2：为了避免递归过深和方便计算是否有进位，所以用二维数组表示了 0-9 的进位情况（SingleDigit、TenDigit）
 *    如：5 + 9 = 14，有进位
 *    故：
 *        TenDigit[5][9] = 1  >>> 十位数
 *        SingleDigit[5][9] = 4 >>> 个位数
 *          
 * 
 * 
 * @param { number } Augend - 第一个数字
 * @param { number } Addend - 第二个数字
 * @return { number } 两数相加之和 
 * 
 * @todo:
 *  需要支持的功能
 *    1、小数相加: 1.2 + 1.5
 *    2、负数加减: -1 + 2
 * 
 * @example
 * type Test = Add<2, 3>
 * >>> 5
 * 
 */
type Add<
  Augend extends number,
  Addend extends number
> = JoinTuple<Augend, Addend> extends `${infer R extends number}`
  ? R
  : never

