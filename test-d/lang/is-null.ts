import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsNull } from '../../lib/lang/is-null'

declare const _any: IsNull<any>
expectType<false>(_any) 


declare const _union: IsNull<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsNull<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsNull<T> 
expectType<true>(getType(basicData.null)); // key
expectType<false>(getType(basicData.undef));
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
