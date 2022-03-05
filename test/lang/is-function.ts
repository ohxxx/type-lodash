import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsFunction } from '../../lib/lang/is-function'

declare const _any: IsFunction<any>
expectType<false>(_any) 


const TF1 = () => undefined
declare const _unionFn: IsFunction<typeof TF1 | typeof basicData.fn | Function>
expectType<true>(_unionFn)  // 关键
declare const _unionSet: IsFunction<'1' | 2 | '3'>
expectType<false>(_unionSet)  // 关键


declare const _unknown: IsFunction<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsFunction<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str)); 
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<true>(getType(basicData.fn)); // 关键
expectType<false>(getType(basicData.date));
expectType<false>(getType(basicData.set));
expectType<false>(getType(basicData.weakSet));
expectType<false>(getType(basicData.map));
expectType<false>(getType(basicData.weakMap));
