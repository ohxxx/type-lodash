import { expectType } from 'tsd'
import type { IsBoolean } from '../../lib/lang/is-boolean'

declare const _any: IsBoolean<any>
expectType<false>(_any)


declare const _union: IsBoolean<'A' | 'B' | 'C'>
expectType<false>(_union)


declare const _unknown: IsBoolean<unknown>
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
declare function getType<T>(params: T): IsBoolean<T> 
expectType<false>(getType(data.null));
expectType<false>(getType(data.undef));
expectType<false>(getType(data.str));
expectType<false>(getType(data.num));
expectType<true>(getType(data.bool)); // key
expectType<false>(getType(data.obj));
expectType<false>(getType(data.arr));
expectType<false>(getType(data.symb));
expectType<false>(getType(data.fn));
