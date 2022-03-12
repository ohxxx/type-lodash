import { expectError, expectType } from 'tsd';
import type { Unescape } from '../../lib/string/unescape'

declare function unescape<Str extends string>(S: Str): Unescape<Str>

expectType<''>(unescape(''))
expectType<'fred, barney, & pebbles'>(unescape('fred, barney, &amp; pebbles'))
expectType<'fred, barney, && pebbles'>(unescape('fred, barney, &&amp; pebbles'))
expectType<'fred, barney, &&& pebbles'>(unescape('fred, barney, &&&amp; pebbles'))
expectType<'fred, barney, &&&&;; pebbles'>(unescape('fred, barney, &&&&amp;;; pebbles'))
expectType<'< > "'>(unescape('&lt; &gt; &quot;'))
expectType<"'">(unescape('&apos;'))

expectError(unescape([]))