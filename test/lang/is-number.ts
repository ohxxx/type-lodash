import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsNumber } from '../../lib/lang/is-number'

declare const _any: IsNumber<any>
expectType<false>(_any) 


declare const _unionNum: IsNumber<1 | 2 | 3>
expectType<true>(_unionNum) // 关键
declare const _unionSet: IsNumber<1 | '2' | [] | true>
expectType<false>(_unionSet) // 关键


declare const _unknown: IsNumber<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsNumber<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<true>(getType(basicData.num)); // 关键
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
