import { expectError, expectType } from 'tsd';
import type { SnakeCase } from '../../lib/string/snake-case'

declare function snakeCase<Str extends string>(str: Str): SnakeCase<Str>

expectType<''>(snakeCase(''))
expectType<'foo_bar'>(snakeCase('    FOO    BAR    '))
expectType<'foo_bar'>(snakeCase('--Foo-Bar--'))
expectType<'foo_bar'>(snakeCase('fooBar'))
expectType<'foo_bar'>(snakeCase('__Foo_Bar__'))
expectType<'（_foo_bar_）'>(snakeCase('--（(FOO-Bar)）--'))
expectType<'（_foo_6_a_aaa_6_aa_6_bar_）'>(snakeCase('--（(Foo6aAaa6AA6Bar)）--'))

expectType<'aaaaaa'>(snakeCase('AAAAAA'))
expectType<'aaaaaa'>(snakeCase('aaaaaa'))
expectType<'aaaaaa'>(snakeCase('Aaaaaa'))
expectType<'a_aaaaa'>(snakeCase('AAaaaa'))
expectType<'aa_aaaa'>(snakeCase('AAAaaa'))
expectType<'aaa_aaa'>(snakeCase('AAAAaa'))
expectType<'aaaa_aa'>(snakeCase('AAAAAa'))
expectType<'aaaaa_a'>(snakeCase('AaaaaA'))
expectType<'aaaa_aa'>(snakeCase('AaaaAA'))
expectType<'aaa_aaa'>(snakeCase('AaaAAA'))
expectType<'aa_aaaa'>(snakeCase('AaAAAA'))
expectType<'aaaabccc_bbbbccd_dd_dd_dcc_dc_ddddcc_cc_c'>(snakeCase('AaaabcccBBBBCCDDdDDDccDcDDDDCCCcC'))


expectError(snakeCase())
expectError(snakeCase([]))
expectError(snakeCase(123))