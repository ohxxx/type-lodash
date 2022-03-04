import { expectType, expectError } from 'tsd';
import type { Add } from '../../lib/math/add'

declare function add<
  Augend extends number,
  Addend extends number
>(augend: Augend, addend: Addend): Add<Augend, Addend>


expectType<3>(add(1, 2))
expectType<300>(add(100, 200))

expectError(add(1, '2'))