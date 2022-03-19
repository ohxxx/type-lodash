import { expectError, expectType } from 'tsd';
import type { StartCase } from '../../lib/string/start-case'

declare function startCase<Str extends string>(str: Str): StartCase<Str>

expectType<''>(startCase(''))
expectType<'FOO BAR'>(startCase('    FOO    BAR    '))
expectType<'Foo Bar'>(startCase('--Foo-Bar--'))
expectType<'Foo Bar'>(startCase('fooBar'))
expectType<'Foo Bar'>(startCase('__Foo_Bar__'))
expectType<'（ FOO Bar ）'>(startCase('--（(FOO-Bar)）--'))
expectType<'（ Foo 6 A Aaa 6 AA 6 Bar ）'>(startCase('--（(Foo6aAaa6AA6Bar)）--'))

expectType<'AAAAAA'>(startCase('AAAAAA'))
expectType<'Aaaaaa'>(startCase('aaaaaa'))
expectType<'Aaaaaa'>(startCase('Aaaaaa'))
expectType<'A Aaaaa'>(startCase('AAaaaa'))
expectType<'AA Aaaa'>(startCase('AAAaaa'))
expectType<'AAA Aaa'>(startCase('AAAAaa'))
expectType<'AAAA Aa'>(startCase('AAAAAa'))
expectType<'Aaaaa A'>(startCase('AaaaaA'))
expectType<'Aaaa AA'>(startCase('AaaaAA'))
expectType<'Aaa AAA'>(startCase('AaaAAA'))
expectType<'Aa AAAA'>(startCase('AaAAAA'))
expectType<'Aa A Aa AAA'>(startCase('AaAAaAAA'))
expectType<'Aaaabccc BBBBCCD Dd DD Dcc Dc DDDDCC Cc C'>(startCase('AaaabcccBBBBCCDDdDDDccDcDDDDCCCcC'))


expectError(startCase())
expectError(startCase([]))
expectError(startCase(123))