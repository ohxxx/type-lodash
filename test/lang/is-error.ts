import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsError } from '../../lib/lang/is-error'

declare const _any: IsError<any>
expectType<false>(_any) 


const _err = new Error()
declare const _unionErr: IsError<typeof _err | typeof basicData.err>
expectType<true>(_unionErr)  // 关键
declare const _unionSet: IsError<'1' | 2 | '3'>
expectType<false>(_unionSet)  // 关键


declare const _unknown: IsError<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsError<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<false>(getType(basicData.symb));
expectType<false>(getType(basicData.fn));
expectType<false>(getType(basicData.date));
expectType<true>(getType(basicData.err)); // 关键
