import { expectType } from 'tsd';
import type { Shift } from '../../lib/helpers/shift';

expectType<Shift<[]>>(undefined)
expectType<Shift<[1, '2', 3]>>(1)