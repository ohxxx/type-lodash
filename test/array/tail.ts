import { expectError, expectType } from 'tsd';
import type { Tail } from '../../lib/array/tail'

expectType<Tail<[]>>([])
expectType<Tail<[1, 2, 3]>>([2, 3])


declare function tail<Arr extends unknown[]>(arr: Arr): Tail<Arr>

expectError(tail({}))
expectError(tail('123'))