import { expectError, expectType } from 'tsd'
import type { Trim } from '../../lib/string/trim'

declare function trim<
  Str extends string,
  Chars extends string = ' '
>(str: Str, chars?: Chars): Trim<Str, Chars>

expectType<'abc'>(trim('abc'))
expectType<'abc'>(trim('  abc  '))
expectType<'_abc_'>(trim(' _abc_ '))
expectType<'bcb'>(trim('aabcbaa', 'a'))
expectType<'ab'>(trim('cabc', 'c'))
expectType<''>(trim('-_-abc-_-', '-_-abc-_-'))
expectType<'abc'>(trim('-_-abc-_-', '-_-'))

expectError(trim())
expectError(trim(666, 6))