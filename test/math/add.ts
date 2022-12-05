import { expectType, expectError } from 'tsd';
import type { Add } from '../../lib/math/add'

declare function add<
  Augend extends number,
  Addend extends number
>(augend: Augend, addend: Addend): Add<Augend, Addend>


expectType<3>(add(1, 2))
expectType<300>(add(100, 200))
expectType<302>(add(209, 93))
expectType<1200>(add(1000, 200))
expectType<1999999999998>(add(999999999999, 999999999999))

expectError(add(1, '2'))