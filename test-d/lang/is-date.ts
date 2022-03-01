import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsDate } from '../../lib/lang/is-date'

declare const _any: IsDate<any>
expectType<false>(_any) 


const D1 = new Date()
const D2 = 2
const D3 = new Date()
declare const _unionDate: IsDate<typeof D1 | typeof D3>
expectType<true>(_unionDate)  // key
declare const _unionSet: IsDate<typeof D1 | typeof D2 | typeof D3>
expectType<false>(_unionSet)  // key


declare const _unknown: IsDate<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsDate<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
expectType<true>(getType(basicData.date));  // key
