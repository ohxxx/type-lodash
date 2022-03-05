import { expectError, expectType } from 'tsd';
import type { Mean } from '../../lib/math/mean'

expectType<Mean<[1, 2, 3, 4]>>(5)
expectType<Mean<[0, 0, 0]>>(0)
expectType<Mean<[]>>(0)

expectError<Mean<[1, 2, 3, 4]>>(6)