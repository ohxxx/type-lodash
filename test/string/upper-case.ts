import { expectType, expectError } from 'tsd';
import type { UpperCase } from '../../lib/string/upper-case'

declare function upperCase<Str extends string>(str: Str): UpperCase<Str>

expectType<''>(upperCase(''))
expectType<'FOO BAR'>(upperCase('    foo    bar    '))
expectType<'FOO BAR'>(upperCase('--foo-bar--'))
expectType<'FOO BAR'>(upperCase('fooBar'))
expectType<'FOO BAR'>(upperCase('__foo_bar__'))
expectType<'（ FOO BAR ）'>(upperCase('--（(foo-bar)）--'))
expectType<'（ FOO 6 BAR ）'>(upperCase('--（(foo6bar)）--'))
expectType<'（ FOO 6 A 6 A 6 BAR ）'>(upperCase('--（(foo6a6a6bar)）--'))
expectType<'（ FOO 6 AA 6 AA 6 BAR ）'>(upperCase('--（(foo6aa6aa6bar)）--'))
expectType<'（ FOO（BIUBIU）BAR ）'>(upperCase('--（(foo（biubiu）bar)）--'))

expectType<'AAAAAA'>(upperCase('AAAAAA'))
expectType<'AAAAAA'>(upperCase('aaaaaa'))
expectType<'AAAAAA'>(upperCase('Aaaaaa'))
expectType<'A AAAAA'>(upperCase('AAaaaa'))
expectType<'AA AAAA'>(upperCase('AAAaaa'))
expectType<'AAA AAA'>(upperCase('AAAAaa'))
expectType<'AAAA AA'>(upperCase('AAAAAa'))
expectType<'AAAAA A'>(upperCase('AaaaaA'))
expectType<'AAAA AA'>(upperCase('AaaaAA'))
expectType<'AAA AAA'>(upperCase('AaaAAA'))
expectType<'AA AAAA'>(upperCase('AaAAAA'))
expectType<'A AAABCC CBBBBCCDD DDDD C CD CDDDDCCC CC'>(upperCase('aAAABCCCbbbbccddDdddCCdCddddcccCc'))


expectError(upperCase())
expectError(upperCase([]))
expectError(upperCase(123))