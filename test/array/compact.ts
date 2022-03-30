import { expectError, expectType } from 'tsd';
import type { Compact } from '../../lib/array/compact'

declare function compact<A extends unknown[]>(arr: A) : Compact<A>

expectType<[]>(compact([]))
expectType<[]>(compact([0, false, null, undefined, ""]))
expectType<Compact<[1, 2, 0, false, true, null, undefined, "", "3"]>>([1, 2, true, "3"])

expectError(compact(''))
expectError(compact(false))