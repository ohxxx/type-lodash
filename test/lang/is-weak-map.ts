import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsWeakMap } from '../../lib/lang/is-weak-map'

declare const _any: IsWeakMap<any>
expectType<false>(_any) 


const M1 = new WeakMap()
const M2 = new WeakMap([])
declare const _unionWeakMap: IsWeakMap<typeof M1 | typeof M2>
expectType<true>(_unionWeakMap)  // 关键
declare const _union: IsWeakMap<typeof M1 | typeof basicData.map | []>
expectType<false>(_union)  // 关键


declare const _unknown: IsWeakMap<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsWeakMap<T> 
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
expectType<false>(getType(basicData.set));
expectType<false>(getType(basicData.map)); // 关键
expectType<true>(getType(basicData.weakMap)); // 关键
