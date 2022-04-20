import { expectType } from 'tsd';
import type { Pop } from '../../lib/helpers/pop';

expectType<Pop<[]>>([])
expectType<Pop<[1, '2', 3]>>([1, '2'])