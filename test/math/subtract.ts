import { expectType, expectError } from 'tsd'
import type { Subtract } from '../../lib/math/subtract'

declare function subtract<
  Minuend extends number,
  Subtrahend extends number
>(minuend: Minuend, subtrahend: Subtrahend): Subtract<Minuend, Subtrahend>

expectType<never>(subtract(1, 2)) // 不符合当前的操作范围
expectType<6>(subtract(8, 2))
expectType<998>(subtract(999, 1))

expectError(subtract(1, '2'))
