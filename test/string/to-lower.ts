import { expectError, expectType } from 'tsd'
import type { ToLower } from '../../lib/string/to-lower'


declare function toLower<Str extends string>(str: Str): ToLower<Str>

expectType<'--foo-bar--'>(toLower('--Foo-Bar--'))
expectType<'foobar'>(toLower('fooBar'))
expectType<'__foo_bar__'>(toLower('__FOO_BAR__'))
expectType<'foo bar'>(toLower('Foo Bar'))

expectError(toLower())
expectError(toLower(666))