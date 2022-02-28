import { expectType } from 'tsd'
import type { IsBoolean } from '../../lib/lang/is-boolean'

/**
 * TODO: optimization
 */
const KEY = Symbol('KEY');

declare const _any: IsBoolean<any>
expectType<false>(_any)

declare const _null: IsBoolean<null>
expectType<false>(_null)

declare const _undef: IsBoolean<undefined>
expectType<false>(_undef)

declare const _unknown: IsBoolean<unknown>
expectType<false>(_unknown)

declare const _str: IsBoolean<''>
expectType<false>(_str)

declare const _arr: IsBoolean<[]>
expectType<false>(_arr)

declare const _bool: IsBoolean<true>
expectType<true>(_bool)

declare const _obj: IsBoolean<{ id: 1 }>
expectType<false>(_obj)

declare const _symb: IsBoolean<typeof KEY>
expectType<false>(_symb)

declare const _union: IsBoolean<'A' | 'B' | 'C'>
expectType<false>(_union)
