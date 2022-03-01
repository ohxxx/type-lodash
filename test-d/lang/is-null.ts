import { expectType } from 'tsd'
import type { IsNull } from '../../lib/lang/is-null'

declare const _any: IsNull<any>
expectType<false>(_any) 


declare const _union: IsNull<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsNull<unknown>
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
declare function getType<T>(params: T): IsNull<T> 
expectType<true>(getType(data.null)); // key
expectType<false>(getType(data.undef));
expectType<false>(getType(data.str));
expectType<false>(getType(data.num));
expectType<false>(getType(data.bool));
expectType<false>(getType(data.obj));
expectType<false>(getType(data.arr));
expectType<false>(getType(data.symb));
expectType<false>(getType(data.fn));
