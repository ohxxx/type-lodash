import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsWeakSet } from '../../lib/lang/is-weak-set'

declare const _any: IsWeakSet<any>
expectType<false>(_any) 


const S1 = new Set()
const S2 = new Set([])
const WS1 = new WeakSet()
const WS2 = new WeakSet([])

declare const _unionSet1: IsWeakSet<typeof WS1 | typeof WS2>
expectType<true>(_unionSet1)  // 关键
declare const _unionSet2: IsWeakSet<typeof WS1 | typeof S1>
expectType<true>(_unionSet2)  // 关键
declare const _union: IsWeakSet<typeof S2 | typeof basicData.set | typeof WS2| []>
expectType<false>(_union)  // 关键


declare const _unknown: IsWeakSet<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsWeakSet<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
expectType<false>(getType(basicData.date));
expectType<false>(getType(basicData.set)); // 关键
expectType<true>(getType(basicData.weakSet)); // 关键
