import { expectType } from 'tsd'
import { basicData } from './constant'
import type { IsSymbol } from '../../lib/lang/is-symbol'

declare const _any: IsSymbol<any>
expectType<false>(_any) 

declare const _unionSymb: IsSymbol<typeof basicData.symb | {}>
expectType<false>(_unionSymb)

const _symb = Symbol('VALUE')
const _symb1 = Symbol.iterator
declare const _unionSet: IsSymbol<typeof basicData.symb | typeof _symb | typeof _symb1>
expectType<true>(_unionSet) 


declare const _unknown: IsSymbol<unknown>
expectType<false>(_unknown)


declare function getType<T>(params: T): IsSymbol<T> 
expectType<false>(getType(basicData.null)); 
expectType<false>(getType(basicData.undef)); 
expectType<false>(getType(basicData.str));
expectType<false>(getType(basicData.num));
expectType<false>(getType(basicData.bool));
expectType<false>(getType(basicData.obj));
expectType<false>(getType(basicData.arr));
expectType<true>(getType(basicData.symb)); // 关键
expectType<false>(getType(basicData.fn));
expectType<false>(getType(basicData.date));
