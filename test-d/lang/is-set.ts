import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsSet } from '../../lib/lang/is-set'

declare const _any: IsSet<any>
expectType<false>(_any) 


const S1 = new Set()
const S2 = new Set([])
declare const _unionSet: IsSet<typeof S1 | typeof S2>
expectType<true>(_unionSet)  // 关键
declare const _union: IsSet<typeof S1 | typeof basicData.set | []>
expectType<false>(_union)  // 关键


declare const _unknown: IsSet<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsSet<T> 
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
expectType<true>(getType(basicData.set)); // 关键
