import { expectType } from 'tsd';
import type { Fill } from '../../lib/array/fill'

declare function fill<
  Arr extends unknown[],
  Value extends unknown,
  Start extends number,
  End extends number
>(arr: Arr, value: Value, start: Start, end: End): Fill<Arr, Value, Start, End>
    
expectType<[]>(fill([], '', 0, 0))

expectType<[]>(fill([], [1]))
expectType<[[1], [1], [1]]>(fill([1, 2, 3], [1]))
expectType<[2, 2, 2]>(fill([1, 2, 3], 2))
expectType<[true, true, true]>(fill([1, 2, 3], true))

expectType<['x', 'x', 'x']>(fill([1, 2, 3], 'x'))
expectType<['x', 'x', 'x']>(fill([1, 2, 3], 'x', 0))
expectType<[1, 'x', 'x']>(fill([1, 2, 3], 'x', 1))
expectType<[1, 2, 'x']>(fill([1, 2, 3], 'x', 2))
expectType<[1, 2, 3]>(fill([1, 2, 3], 'x', 3))

expectType<['x', 'x', 'x']>(fill([1, 2, 3], 'x', 0, 3))
expectType<[1, 'x', 'x']>(fill([1, 2, 3], 'x', 1, 3))
expectType<[1, 2, 'x']>(fill([1, 2, 3], 'x', 2, 3))
expectType<[1, 2, 3]>(fill([1, 2, 3], 'x', 3, 3))
expectType<[1, 2, 3]>(fill([1, 2, 3], 'x', 4, 3))

expectType<[1, 2, 'x']>(fill([1, 2, 3], 'x', -1))
expectType<[1, 'x', 'x']>(fill([1, 2, 3], 'x', -2))
expectType<['x', 'x', 'x']>(fill([1, 2, 3], 'x', -3))

expectType<[1, 2, 3]>(fill([1, 2, 3], 'x', -1, 2))
expectType<[1, 2, 'x']>(fill([1, 2, 3], 'x', -1, 5))
expectType<[1, 'x', 3]>(fill([1, 2, 3], 'x', -2, 2))
expectType<[1, 'x', 'x']>(fill([1, 2, 3], 'x', -2, 3))
