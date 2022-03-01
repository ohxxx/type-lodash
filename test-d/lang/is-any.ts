import { expectType } from 'tsd'
import type { IsAny } from '../../lib/lang/is-any'

declare const _any: IsAny<any>
expectType<true>(_any) // key


declare const _union: IsAny<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsAny<unknown>
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
declare function getType<T>(params: T): IsAny<T> 
expectType<false>(getType(data.null));
expectType<false>(getType(data.undef));
expectType<false>(getType(data.str));
expectType<false>(getType(data.num));
expectType<false>(getType(data.bool));
expectType<false>(getType(data.obj));
expectType<false>(getType(data.arr));
expectType<false>(getType(data.symb));
expectType<false>(getType(data.fn));