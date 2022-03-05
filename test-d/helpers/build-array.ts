import { expectError, expectType } from 'tsd';
import type { BuildArray } from '../../lib/math/add';

declare function buildArray<Len extends number>(len: Len): BuildArray<Len>

expectType<[unknown, unknown]>(buildArray(2))

expectError(buildArray())
expectError(buildArray('2'))