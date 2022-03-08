import { expectType } from 'tsd';
import type { Last } from '../../lib/array/last'

expectType<Last<[]>>(undefined)
expectType<Last<[1, 2, 3]>>(3)
expectType<Last<[true, false, true]>>(true)