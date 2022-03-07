import { expectType } from 'tsd';
import type { Reverse } from '../../lib/array/reverse'

expectType<Reverse<[]>>([])
expectType<Reverse<[true, false, false, true]>>([true, false, false, true])
expectType<Reverse<[6, 5, 4, 3, 2, 1]>>([1, 2, 3, 4, 5, 6])