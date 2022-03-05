import { expectType, expectError } from 'tsd';
import type { Capitalize } from '../../lib/string/capitalize'

declare function capitalize<Str extends string>(str: Str): Capitalize<Str>

expectType<'Abc'>(capitalize('ABC'))
expectType<'Abc'>(capitalize('abc'))
expectType<'__abc__'>(capitalize('__abc__'))
expectType<'Abc cba'>(capitalize('abc cba'))

expectError(capitalize())
expectError(capitalize(12))