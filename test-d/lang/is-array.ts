import { expectType } from 'tsd'
import type { IsArray } from '../../lib/lang/is-array'

/**
 * TODO: optimization
 */
const KEY = Symbol('KEY');

declare const _any: IsArray<any>
expectType<false>(_any)

declare const _null: IsArray<null>
expectType<false>(_null)

declare const _undef: IsArray<undefined>
expectType<false>(_undef)

declare const _unknown: IsArray<unknown>
expectType<false>(_unknown)

declare const _str: IsArray<''>
expectType<false>(_str)

declare const _arr: IsArray<[]>
expectType<true>(_arr)

declare const _bool: IsArray<true>
expectType<false>(_bool)

declare const _obj: IsArray<{ id: 1 }>
expectType<false>(_obj)

declare const _symb: IsArray<typeof KEY>
expectType<false>(_symb)

declare const _union: IsArray<'A' | 'B' | 'C'>
expectType<false>(_union)
