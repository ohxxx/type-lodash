import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsMap } from '../../lib/lang/is-map'

declare const _any: IsMap<any>
expectType<false>(_any) 


const M1 = new Map()
const M2 = new Map([])
declare const _unionMap: IsMap<typeof M1 | typeof M2>
expectType<true>(_unionMap)  // 关键
declare const _union: IsMap<typeof M1 | typeof basicData.map | []>
expectType<false>(_union)  // 关键


declare const _unknown: IsMap<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsMap<T> 
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
expectType<true>(getType(basicData.map));
