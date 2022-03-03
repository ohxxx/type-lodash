import { expectType } from 'tsd';
import type { EndsWith } from '../../lib/string/ends-with'
import type { Split } from '../../lib/string/split';

declare function endsWith<
  Str extends string,
  Target extends string,
  Position extends number = Split<Str>['length']
>(str: Str, target: Target, position?: Position): EndsWith<Str, Target, Position>

expectType<true>(endsWith('abc', 'c'))
expectType<false>(endsWith('abc', 'b'))
expectType<false>(endsWith('abc', 'b', 1))
expectType<true>(endsWith('abc', 'a', 1))
expectType<false>(endsWith('abc', 'b', -1))