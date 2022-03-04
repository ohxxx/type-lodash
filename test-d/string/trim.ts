import { expectType } from 'tsd'
import type { Trim } from '../../lib/string/trim'

declare function trimStart<
  Str extends string,
  Chars extends string = ' '
>(str: Str, chars?: Chars): Trim<Str, Chars>

expectType<'abc'>(trimStart('abc'))
expectType<'abc'>(trimStart('  abc  '))
expectType<'_abc_'>(trimStart(' _abc_ '))
expectType<'bcb'>(trimStart('aabcbaa', 'a'))
expectType<'ab'>(trimStart('cabc', 'c'))
expectType<''>(trimStart('-_-abc-_-', '-_-abc-_-'))
expectType<'abc'>(trimStart('-_-abc-_-', '-_-'))