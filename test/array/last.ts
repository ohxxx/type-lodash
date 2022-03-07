import { expectType, expectError } from 'tsd';
import type { Last } from '../../lib/array/last'

declare function last<Arr extends unknown[]>(arr: Arr): Last<Arr>

expectType<undefined>(last([]))
expectType<3>(last([1, 2, 3]))
expectType<true>(last([true, false, true]))

expectError(last())
expectError(last('123'))