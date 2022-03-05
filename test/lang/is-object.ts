import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsObject } from '../../lib/lang/is-object'

declare const _any: IsObject<any>
expectType<false>(_any) 


declare const _unionObj: IsObject<{} | {id: 1}>
expectType<true>(_unionObj)  // 关键
declare const _unionSet: IsObject<'1' | {}| '3'>
expectType<false>(_unionSet)  // 关键


declare const _unknown: IsObject<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsObject<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<true>(getType(basicData.obj)); // 关键
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
expectType<false>(getType(basicData.date));
