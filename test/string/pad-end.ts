import { expectError, expectType } from 'tsd';
import type { PadEnd } from '../../lib/string/pad-end'


declare function padEnd<
  Str extends string,
  Len extends number = 0,
  Chars extends string = ' '
>(S: Str, L?: Len, C?: Chars): PadEnd<Str, Len, Chars>

expectType<'abc'>(padEnd('abc'))
expectType<'abc'>(padEnd('abc', 2))
expectType<'abc'>(padEnd('abc', 3))
expectType<'abc   '>(padEnd('abc', 6))
expectType<'abc***'>(padEnd('abc', 6, '*'))


expectError(padEnd())
expectError(padEnd([]))