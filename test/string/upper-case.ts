import { expectType, expectError } from 'tsd';
import type { UpperCase } from '../../lib/string/upper-case'

declare function upperCase<Str extends string>(str: Str): UpperCase<Str>

expectType<''>(upperCase(''))
expectType<'FOO BAR'>(upperCase('--foo-bar--'))
expectType<'FOO BAR'>(upperCase('fooBar'))
expectType<'FOO BAR'>(upperCase('__foo_bar__'))
expectType<'（FOO BAR）'>(upperCase('--（(foo-bar)）--'))
expectType<'（FOO 6 BAR）'>(upperCase('--（(foo6bar)）--'))
expectType<'（ FOO 6 A 6 A 6 BAR ）'>(upperCase('--（(foo6a6a6bar)）--'))
expectType<'（ FOO 6 AA 6 AA 6 BAR ）'>(upperCase('--（(foo6aa6aa6bar)）--'))


expectError(upperCase())
expectError(upperCase([]))
expectError(upperCase(123))