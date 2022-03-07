import { expectType } from 'tsd';
import type { Drop } from '../../lib/array/drop'

declare function drop<Arr extends unknown[], N extends number = 1>(arr: Arr, n?: N): Drop<Arr, N>

expectType<[]>(drop([]))
expectType<[2, 3]>(drop([1, 2, 3]))
expectType<[3]>(drop([1, 2, 3], 2))
expectType<[]>(drop([1, 2, 3], 5))
expectType<[1, 2, 3]>(drop([1, 2, 3], 0))