import { expectType } from 'tsd'
import type { StartsWith } from '../../lib/string/starts-with'


declare function startsWith<
  Str extends string,
  Target extends string,
  Position extends number = 0
>(str: Str, target: Target, position?: Position): StartsWith<Str, Target, Position>

expectType<true>(startsWith('abc', 'a'))
expectType<false>(startsWith('abc', 'b'))
expectType<true>(startsWith('abc', 'b', 1))
expectType<false>(startsWith('abc', 'b', 1.2))
expectType<false>(startsWith('abc', 'b', -1))