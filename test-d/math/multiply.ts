import { expectType, expectError } from 'tsd'
import type { Multiply } from '../../lib/math/multiply'

declare function multiply<
  Multiplier extends number,
  Multiplicand extends number,
>(multiplier: Multiplier, multiplicand: Multiplicand): Multiply<Multiplier, Multiplicand>

expectType<0>(multiply(996, 0)) // 不符合当前的操作范围
expectType<16>(multiply(8, 2))
expectType<999>(multiply(999, 1))

expectError(multiply(1, '2'))
