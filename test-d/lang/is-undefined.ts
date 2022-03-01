import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsUndefined } from '../../lib/lang/is-undefined'

declare const _any: IsUndefined<any>
expectType<false>(_any) 


declare const _union: IsUndefined<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsUndefined<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsUndefined<T> 
expectType<false>(getType(basicData.null)); 
expectType<true>(getType(basicData.undef)); // key
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
