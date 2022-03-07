import { expectType } from 'tsd';
import type { DropRight } from '../../lib/array/drop-right'

declare function dropRight<Arr extends unknown[], N extends number = 1>(arr: Arr, n?: N): DropRight<Arr, N>

expectType<[]>(dropRight([]))
expectType<[1, 2]>(dropRight([1, 2, 3]))
expectType<[1]>(dropRight([1, 2, 3], 2))
expectType<[]>(dropRight([1, 2, 3], 5))
expectType<[1, 2, 3]>(dropRight([1, 2, 3], 0))