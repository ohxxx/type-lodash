import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsBoolean } from '../../lib/lang/is-boolean'

declare const _any: IsBoolean<any>
expectType<false>(_any)


declare const _union: IsBoolean<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsBoolean<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsBoolean<T> 
expectType<false>(getType(basicData.null));
expectType<false>(getType(basicData.undef));
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<true>(getType(basicData.bool)); // key
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
