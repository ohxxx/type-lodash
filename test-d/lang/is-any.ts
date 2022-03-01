import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsAny } from '../../lib/lang/is-any'

declare const _any: IsAny<any>
expectType<true>(_any) // key


declare const _union: IsAny<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsAny<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsAny<T> 
expectType<false>(getType(basicData.null));
expectType<false>(getType(basicData.undef));
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));