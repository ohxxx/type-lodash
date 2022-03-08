import { expectError, expectType } from 'tsd';
import type { Initial } from '../../lib/array/initial'


expectType<Initial<[]>>([])
expectType<Initial<[1, 2, 3]>>([1, 2])


declare function initial<Arr extends unknown[]>(arr: Arr): Initial<Arr>

expectError(initial({}))
expectError(initial('123'))