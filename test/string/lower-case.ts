import { expectType, expectError } from 'tsd';
import type { LowerCase } from '../../lib/string/lower-case'

declare function lowerCase<Str extends string>(str: Str): LowerCase<Str>

expectType<''>(lowerCase(''))
expectType<'foo bar'>(lowerCase('    FOO    BAR    '))
expectType<'foo bar'>(lowerCase('--Foo-Bar--'))
expectType<'foo bar'>(lowerCase('fooBar'))
expectType<'foo bar'>(lowerCase('__Foo_Bar__'))
expectType<'（ foo bar ）'>(lowerCase('--（(FOO-Bar)）--'))
expectType<'（ foo 6 a aaa 6 aa 6 bar ）'>(lowerCase('--（(Foo6aAaa6AA6Bar)）--'))

expectType<'aaaaaa'>(lowerCase('AAAAAA'))
expectType<'aaaaaa'>(lowerCase('aaaaaa'))
expectType<'aaaaaa'>(lowerCase('Aaaaaa'))
expectType<'a aaaaa'>(lowerCase('AAaaaa'))
expectType<'aa aaaa'>(lowerCase('AAAaaa'))
expectType<'aaa aaa'>(lowerCase('AAAAaa'))
expectType<'aaaa aa'>(lowerCase('AAAAAa'))
expectType<'aaaaa a'>(lowerCase('AaaaaA'))
expectType<'aaaa aa'>(lowerCase('AaaaAA'))
expectType<'aaa aaa'>(lowerCase('AaaAAA'))
expectType<'aa aaaa'>(lowerCase('AaAAAA'))
expectType<'aaaabccc bbbbccd dd dd dcc dc ddddcc cc c'>(lowerCase('AaaabcccBBBBCCDDdDDDccDcDDDDCCCcC'))


expectError(lowerCase())
expectError(lowerCase([]))
expectError(lowerCase(123))