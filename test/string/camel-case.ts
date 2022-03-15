import { expectType, expectError } from 'tsd';
import type { CamelCase } from '../../lib/string/camel-case'

declare function camelCase<Str extends string>(str: Str): CamelCase<Str>

expectType<''>(camelCase(''))
expectType<''>(camelCase('-----'))
expectType<'（996ICU）'>(camelCase('- _ & * ( * @ % ()（996ICU）'))
expectType<''>(camelCase('-----'))
expectType<'fooBar'>(camelCase('Foo Bar'))
expectType<'fooBar'>(camelCase('--foo-bar--'))
expectType<'fooBar'>(camelCase('__FOO_BAR__'))
expectType<'fooBar'>(camelCase('-Foo Bar-'))
expectType<'aaBbCc'>(camelCase('AaBbCc'))
expectType<'ab2C'>(camelCase('AB2C'))


/**
 * 一下测试用例参考于（https://github.com/lodash/lodash/blob/master/test/camelCase.test.js）
 */
expectType<'12Feet'>(camelCase('12 feet'))
expectType<'enable6HFormat'>(camelCase('enable 6h format'))
expectType<'enable24HFormat'>(camelCase('enable 24H format'))
expectType<'tooLegit2Quit'>(camelCase('too legit 2 quit'))
expectType<'walk500Miles'>(camelCase('walk 500 miles'))
expectType<'xhr2Request'>(camelCase('xhr2 request'))
expectType<'safe HTML'>(camelCase('safeHtml'))
expectType<'safeHTML'>(camelCase('safeHtml'))
expectType<'escape HTML entities'>(camelCase('escapeHtmlEntities'))
expectType<'escapeHTMLEntities'>(camelCase('escapeHtmlEntities'))
expectType<'XMLHttpRequest'>(camelCase('xmlHttpRequest'))
expectType<'XmlHTTPRequest'>(camelCase('xmlHttpRequest'))



expectError(camelCase())
expectError(camelCase(123))
expectError(camelCase([]))