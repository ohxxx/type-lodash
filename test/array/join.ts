import { expectType } from 'tsd';
import type { Join } from '../../lib/array/join'

expectType<Join<[]>>('')
expectType<Join<['a', 'b', 'c']>>('a,b,c')
expectType<Join<['a', 'b', 'c'], '~'>>('a~b~c')
expectType<Join<[1, 2, 3], '-'>>('1-2-3')