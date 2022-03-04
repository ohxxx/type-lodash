import { expectError, expectType } from 'tsd'
import type { ToUpper } from '../../lib/string/to-upper'


declare function toUpper<Str extends string>(str: Str): ToUpper<Str>

expectType<'--FOO-BAR--'>(toUpper('--foo-bar--'))
expectType<'FOOBAR'>(toUpper('fooBar'))
expectType<'__FOO_BAR__'>(toUpper('__foo_bar__'))
expectType<'FOO BAR'>(toUpper('Foo Bar'))

expectError(toUpper())
expectError(toUpper(666))