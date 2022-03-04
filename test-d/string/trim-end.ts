import { expectError, expectType } from 'tsd'
import type { TrimEnd } from '../../lib/string/trim-end'

declare function trimEnd<
  Str extends string,
  Chars extends string = ' '
>(str: Str, chars?: Chars): TrimEnd<Str, Chars>

expectType<'abc'>(trimEnd('abc'))
expectType<'  abc'>(trimEnd('  abc  '))
expectType<' _abc_'>(trimEnd(' _abc_ '))
expectType<'abca'>(trimEnd('abcacc', 'c'))
expectType<'ab'>(trimEnd('abc', 'c'))
expectType<''>(trimEnd('-_-abc-_-', '-_-abc-_-'))
expectType<'-_-abc-'>(trimEnd('-_-abc-_-', '_-'))

expectError(trimEnd())
expectError(trimEnd(666, 6))