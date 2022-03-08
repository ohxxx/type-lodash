import { expectError, expectType } from 'tsd';
import type { Head } from '../../lib/array/head'


expectType<Head<[]>>(undefined)
expectType<Head<[1, 2, 3]>>(1)


declare function head<Arr extends unknown[]>(arr: Arr): Head<Arr>

expectError(head({}))
expectError(head('123'))