import { expectError, expectType } from 'tsd';
import type { Sum } from '../../lib/math/sum'

expectType<Sum<[]>>(0)
expectType<Sum<[1]>>(1)
expectType<Sum<[1, 2, 3]>>(6)


declare function sum<Arr extends number[]>(arr: Arr): Sum<Arr>

expectError(sum())
expectError(sum(''))
expectError(sum(['xxx']))