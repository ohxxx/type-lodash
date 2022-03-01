import { expectType } from 'tsd'
import type { IsArray } from '../../lib/lang/is-array'

declare const _any: IsArray<any>
expectType<false>(_any)


declare const _union: IsArray<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsArray<unknown>
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
declare function getType<T>(params: T): IsArray<T> 
expectType<false>(getType(data.null));
expectType<false>(getType(data.undef));
expectType<false>(getType(data.str));
expectType<false>(getType(data.num));
expectType<false>(getType(data.bool));
expectType<false>(getType(data.obj));
expectType<true>(getType(data.arr)); // key
expectType<false>(getType(data.symb));
expectType<false>(getType(data.fn));