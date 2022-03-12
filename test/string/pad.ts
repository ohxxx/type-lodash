import { expectError, expectType } from 'tsd';
import type { Pad } from '../../lib/string/pad'


declare function pad<
  Str extends string,
  Len extends number = 0,
  Chars extends string = ' '
>(S: Str, L?: Len, C?: Chars): Pad<Str, Len, Chars>

expectType<'abc'>(pad('abc'))
expectType<'abc'>(pad('abc', 2))
expectType<'abc'>(pad('abc', 3))
expectType<'  abc  '>(pad('abc', 7))
expectType<'  abc   '>(pad('abc', 8))
expectType<'**abc***'>(pad('abc', 8, '*'))


expectError(pad())
expectError(pad([]))