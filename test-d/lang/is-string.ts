import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsString } from '../../lib/lang/is-string'

declare const _any: IsString<any>
expectType<false>(_any) 


declare const _unionStr: IsString<'A' | 'B' | 'C'>
expectType<true>(_unionStr)  // 关键
declare const _unionSet: IsString<'1' | 2 | '3'>
expectType<false>(_unionSet)  // 关键


declare const _unknown: IsString<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsString<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<true>(getType(basicData.str));  // 关键
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
expectType<false>(getType(basicData.date));
