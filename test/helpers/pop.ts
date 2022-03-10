import { expectType } from 'tsd';
import type { Pop } from '../../lib/helpers/pop';

expectType<Pop<[]>>(undefined)
expectType<Pop<[1, '2', 3]>>(3)