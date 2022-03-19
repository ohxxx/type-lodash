import { expectError, expectType } from 'tsd';
import type { KebabCase } from '../../lib/string/kebab-case'

declare function kebabCase<Str extends string>(str: Str): KebabCase<Str>

expectType<''>(kebabCase(''))
expectType<'foo-bar'>(kebabCase('    FOO    BAR    '))
expectType<'foo-bar'>(kebabCase('--Foo-Bar--'))
expectType<'foo-bar'>(kebabCase('fooBar'))
expectType<'foo-bar'>(kebabCase('__Foo_Bar__'))
expectType<'（-foo-bar-）'>(kebabCase('--（(FOO-Bar)）--'))
expectType<'（-foo-6-a-aaa-6-aa-6-bar-）'>(kebabCase('--（(Foo6aAaa6AA6Bar)）--'))

expectType<'aaaaaa'>(kebabCase('AAAAAA'))
expectType<'aaaaaa'>(kebabCase('aaaaaa'))
expectType<'aaaaaa'>(kebabCase('Aaaaaa'))
expectType<'a-aaaaa'>(kebabCase('AAaaaa'))
expectType<'aa-aaaa'>(kebabCase('AAAaaa'))
expectType<'aaa-aaa'>(kebabCase('AAAAaa'))
expectType<'aaaa-aa'>(kebabCase('AAAAAa'))
expectType<'aaaaa-a'>(kebabCase('AaaaaA'))
expectType<'aaaa-aa'>(kebabCase('AaaaAA'))
expectType<'aaa-aaa'>(kebabCase('AaaAAA'))
expectType<'aa-aaaa'>(kebabCase('AaAAAA'))
expectType<'aaaabccc-bbbbccd-dd-dd-dcc-dc-ddddcc-cc-c'>(kebabCase('AaaabcccBBBBCCDDdDDDccDcDDDDCCCcC'))


expectError(kebabCase())
expectError(kebabCase([]))
expectError(kebabCase(123))