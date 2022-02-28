import { expectType } from 'tsd'
import type { IsAny } from '../../lib/lang/is-any'

/**
 * TODO: optimization
 */
const KEY = Symbol('KEY');

declare const _any: IsAny<any>
expectType<true>(_any)

declare const _null: IsAny<null>
expectType<false>(_null)

declare const _undef: IsAny<undefined>
expectType<false>(_undef)

declare const _unknown: IsAny<unknown>
expectType<false>(_unknown)

declare const _str: IsAny<''>
expectType<false>(_str)

declare const _arr: IsAny<[]>
expectType<false>(_arr)

declare const _bool: IsAny<true>
expectType<false>(_bool)

declare const _obj: IsAny<{ id: 1 }>
expectType<false>(_obj)

declare const _symb: IsAny<typeof KEY>
expectType<false>(_symb)

declare const _union: IsAny<'A' | 'B' | 'C'>
expectType<false>(_union)
