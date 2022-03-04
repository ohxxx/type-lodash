import { expectError, expectType } from 'tsd'
import type { TrimStart } from '../../lib/string/trim-start'

declare function trimStart<
  Str extends string,
  Chars extends string = ' '
>(str: Str, chars?: Chars): TrimStart<Str, Chars>

expectType<'abc'>(trimStart('abc'))
expectType<'abc  '>(trimStart('  abc  '))
expectType<'_abc_ '>(trimStart(' _abc_ '))
expectType<'babc'>(trimStart('aababc', 'a'))
expectType<'abc'>(trimStart('abc', 'c'))
expectType<''>(trimStart('-_-abc-_-', '-_-abc-_-'))
expectType<'-_-abc-_-'>(trimStart('-_-abc-_-', '_-'))

expectError(trimStart())
expectError(trimStart(666, 6))