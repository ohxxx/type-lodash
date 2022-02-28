import { expectType } from 'tsd'
import type { IsNull } from '../../lib/lang/is-null'

/**
 * TODO: optimization
 */
const KEY = Symbol('KEY');

declare const _any: IsNull<any>
expectType<true>(_any)

declare const _null: IsNull<null>
expectType<true>(_null)

declare const _undef: IsNull<undefined>
expectType<false>(_undef)

declare const _unknown: IsNull<unknown>
expectType<false>(_unknown)

declare const _str: IsNull<''>
expectType<false>(_str)

declare const _arr: IsNull<[]>
expectType<false>(_arr)

declare const _bool: IsNull<true>
expectType<false>(_bool)

declare const _obj: IsNull<{ id: 1 }>
expectType<false>(_obj)

declare const _symb: IsNull<typeof KEY>
expectType<false>(_symb)

declare const _union: IsNull<'A' | 'B' | 'C'>
expectType<false>(_union)
