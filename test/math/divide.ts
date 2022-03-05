import { expectType, expectError } from 'tsd'
import type { Divide } from '../../lib/math/divide'

declare function divide<
  Dividend extends number,
  Divisor extends number,
>(dividend: Dividend, divisor: Divisor): Divide<Dividend, Divisor>

expectType<4>(divide(8, 2))
expectType<99>(divide(99, 1))

expectError(divide('11'))
