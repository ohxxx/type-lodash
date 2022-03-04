import { expectType } from 'tsd'
import type { TrimEnd } from '../../lib/string/trim-end'

declare function trimStart<
  Str extends string,
  Chars extends string = ' '
>(str: Str, chars?: Chars): TrimEnd<Str, Chars>

expectType<'abc'>(trimStart('abc'))
expectType<'  abc'>(trimStart('  abc  '))
expectType<' _abc_'>(trimStart(' _abc_ '))
expectType<'abca'>(trimStart('abcacc', 'c'))
expectType<'ab'>(trimStart('abc', 'c'))
expectType<''>(trimStart('-_-abc-_-', '-_-abc-_-'))
expectType<'-_-abc-'>(trimStart('-_-abc-_-', '_-'))