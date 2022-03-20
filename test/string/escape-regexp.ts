import { expectType } from 'tsd';
import type { EscapeRegExp } from '../../lib/string/escape-regexp'

expectType<EscapeRegExp<''>>('')
expectType<EscapeRegExp<' '>>(' ')
expectType<EscapeRegExp<null>>('')
expectType<EscapeRegExp<undefined>>('')
expectType<EscapeRegExp<'[lodash](https://lodash.com/)'>>('\\[lodash\\]\\(https://lodash\\.com/\\)')
expectType<EscapeRegExp<'^$.*+?()[]{}|\\'>>('\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\')