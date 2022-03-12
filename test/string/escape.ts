import { expectError, expectType } from 'tsd';
import type { Escape } from '../../lib/string/escape'

declare function escape<Str extends string>(S: Str): Escape<Str>

expectType<''>(escape(''))
expectType<'fred, barney, &amp; pebbles'>(escape('fred, barney, & pebbles'))
expectType<'fred, barney, &amp;amp; pebbles'>(escape('fred, barney, &amp; pebbles'))
expectType<'&lt; &amp; &quot;'>(escape('< > "'))
expectType<'&apos;'>(escape("'"))

expectError(escape([]))