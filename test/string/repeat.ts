import { expectError, expectType } from 'tsd';
import type { Repeat } from '../../lib/string/repeat'

declare function repeat<Str extends string, N extends number = 1>(str: Str, n?: N): Repeat<Str, N>

expectType<'*'>(repeat('*'))
expectType<'***'>(repeat('*', 3))
expectType<'abcabc'>(repeat('abc', 2))
expectType<''>(repeat('abc', 0))

expectError(repeat({}))