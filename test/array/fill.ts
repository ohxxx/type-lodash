import { expectType } from 'tsd';
import type { Fill } from '../../lib/array/fill'
    
expectType<Fill<[], '', 0, 0>>([])

expectType<Fill<[], [1]>>([])
expectType<Fill<[1, 2, 3], [1]>>([[1], [1], [1]])
expectType<Fill<[1, 2, 3], 2>>([2, 2, 2])
expectType<Fill<[1, 2, 3], true>>([true, true, true])

expectType<Fill<[1, 2, 3], 'x'>>(['x', 'x', 'x'])
expectType<Fill<[1, 2, 3], 'x', 0>>(['x', 'x', 'x'])
expectType<Fill<[1, 2, 3], 'x', 1>>([1, 'x', 'x'])
expectType<Fill<[1, 2, 3], 'x', 2>>([1, 2, 'x'])
expectType<Fill<[1, 2, 3], 'x', 3>>([1, 2, 3])

expectType<Fill<[1, 2, 3], 'x', 0, 2>>(['x', 'x', 3])
expectType<Fill<[1, 2, 3], 'x', 0, 3>>(['x', 'x', 'x'])
expectType<Fill<[1, 2, 3], 'x', 1, 1>>([1, 2, 3])
expectType<Fill<[1, 2, 3], 'x', 1, 2>>([1, 'x', 3])
expectType<Fill<[1, 2, 3], 'x', 1, 3>>([1, 'x', 'x'])
expectType<Fill<[1, 2, 3], 'x', 2, 3>>([1, 2, 'x'])
expectType<Fill<[1, 2, 3], 'x', 3, 3>>([1, 2, 3])
expectType<Fill<[1, 2, 3], 'x', 4, 3>>([1, 2, 3])


// TODO
// expectType<Fill<[1, 2, 3], 'x', -1>>([1, 2, 'x'])
// expectType<Fill<[1, 2, 3], 'x', -2>>([1, 'x', 'x'])
// expectType<Fill<[1, 2, 3], 'x', -3>>(['x', 'x', 'x'])

// expectType<Fill<[1, 2, 3], 'x', -1, 2>>([1, 2, 3])
// expectType<Fill<[1, 2, 3], 'x', -1, 5>>([1, 2, 'x'])
// expectType<Fill<[1, 2, 3], 'x', -2, 2>>([1, 'x', 3])
// expectType<Fill<[1, 2, 3], 'x', -2, 3>>([1, 'x', 'x'])
