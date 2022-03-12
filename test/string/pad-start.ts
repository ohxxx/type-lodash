import { expectError, expectType } from 'tsd';
import type { PadStart } from '../../lib/string/pad-start'


declare function padStart<
  Str extends string,
  Len extends number = 0,
  Chars extends string = ' '
>(S: Str, L?: Len, C?: Chars): PadStart<Str, Len, Chars>

expectType<'abc'>(padStart('abc'))
expectType<'abc'>(padStart('abc', 2))
expectType<'abc'>(padStart('abc', 3))
expectType<'   abc'>(padStart('abc', 6))
expectType<'***abc'>(padStart('abc', 6, '*'))


expectError(padStart())
expectError(padStart([]))