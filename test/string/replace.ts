import { expectError, expectType } from 'tsd';
import type { Replace } from '../../lib/string/replace'

declare function replace<
  Str extends string,
  Pattern extends string,
  Replacement extends string,
>(S: Str, P: Pattern, R: Replacement): Replace<Str, Pattern, Replacement>

expectType<'Hi Barney'>(replace('Hi Fred', 'Fred', 'Barney'))
expectType<'---'>(replace('***', '*', '-'))
expectType<'abc'>(replace('abc', 'd', 'e'))
expectType<''>(replace('', '', ''))

expectError(replace({}))