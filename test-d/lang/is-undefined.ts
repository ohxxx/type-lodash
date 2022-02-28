import { expectType } from 'tsd'
import type { IsUndefined } from '../../lib/lang/is-undefined'

/**
 * TODO: optimization
 */
const KEY = Symbol('KEY');

declare const _any: IsUndefined<any>
expectType<true>(_any)

declare const _null: IsUndefined<null>
expectType<false>(_null)

declare const _undef: IsUndefined<undefined>
expectType<true>(_undef)

declare const _unknown: IsUndefined<unknown>
expectType<false>(_unknown)

declare const _str: IsUndefined<''>
expectType<false>(_str)

declare const _arr: IsUndefined<[]>
expectType<false>(_arr)

declare const _bool: IsUndefined<true>
expectType<false>(_bool)

declare const _obj: IsUndefined<{ id: 1 }>
expectType<false>(_obj)

declare const _symb: IsUndefined<typeof KEY>
expectType<false>(_symb)

declare const _union: IsUndefined<'A' | 'B' | 'C'>
expectType<false>(_union)
