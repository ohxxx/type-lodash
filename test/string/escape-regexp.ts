import { expectType } from 'tsd';
import type { EscapeRegExp } from '../../lib/string/escape-regexp'

declare function escapeRegExp<Str extends string>(Str: Str): EscapeRegExp<Str>

expectType<''>(escapeRegExp(''))
expectType<' '>(escapeRegExp(' '))
expectType<''>(escapeRegExp(null))
expectType<''>(escapeRegExp(undefined))
expectType<'\\[lodash\\]\\(https://lodash\\.com/\\)'>(escapeRegExp('[lodash](https://lodash.com/)'))
expectType<'\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\'>(escapeRegExp('^$.*+?()[]{}|\\'))

