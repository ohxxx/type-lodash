import { expectType, expectError } from 'tsd'
import type { Multiply } from '../../lib/math/multiply'

declare function multiply<
  Multiplier extends number,
  Multiplicand extends number,
>(multiplier: Multiplier, multiplicand: Multiplicand): Multiply<Multiplier, Multiplicand>

expectType<0>(multiply(99, 0))
expectType<198>(multiply(99, 2))
expectType<16>(multiply(8, 2))

expectError(multiply(1, '2'))
