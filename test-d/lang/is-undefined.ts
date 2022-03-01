import { expectType } from 'tsd'
import type { IsUndefined } from '../../lib/lang/is-undefined'

declare const _any: IsUndefined<any>
expectType<false>(_any) 


declare const _union: IsUndefined<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsUndefined<unknown>
expectType<false>(_unknown)


const data = {
	null: null,
	undef: undefined,
	str: 'A',
	num: 1,
	bool: false,
	obj: {},
  arr: ['A', 'B'],
	symb: Symbol('KEY'),
	fn: () => {},
};
declare function getType<T>(params: T): IsUndefined<T> 
expectType<false>(getType(data.null)); 
expectType<true>(getType(data.undef)); // key
expectType<false>(getType(data.str));
expectType<false>(getType(data.num));
expectType<false>(getType(data.bool));
expectType<false>(getType(data.obj));
expectType<false>(getType(data.arr));
expectType<false>(getType(data.symb));
expectType<false>(getType(data.fn));
