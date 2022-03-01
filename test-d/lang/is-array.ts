import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsArray } from '../../lib/lang/is-array'

declare const _any: IsArray<any>
expectType<false>(_any)


declare const _union: IsArray<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsArray<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsArray<T> 
expectType<false>(getType(basicData.null));
expectType<false>(getType(basicData.undef));
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<true>(getType(basicData.arr)); // key
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));