import { expectType } from 'tsd';
import type { Words } from '../../lib/string/words'

declare function words<Str extends string>(str: Str): Words<Str>


expectType<[]>(words(''))
expectType<[]>(words('..'))
expectType<[]>(words('...'))
expectType<['。。。']>(words('。。。'))
expectType<['xxx']>(words('xxx'))
expectType<['xxxyyy']>(words('xxxyyy'))
expectType<['xxx', 'Yyy']>(words('xxxYyy'))
expectType<['xxx', 'Y', 'Yy']>(words('xxxYYy'))
expectType<['xxx', 'YYY']>(words('xxxYYY'))
expectType<['xxx', 'YYY']>(words('xxx*&(YYY'))
expectType<['xxx', 'YYY']>(words('xxx *, YYY'))
expectType<['xxx', 'YYY']>(words('xxx&&&YYY'))
expectType<['xxx（yyy）']>(words('xxx（yyy）'))
expectType<['xxx（', 'YYY）']>(words('xxx（YYY）'))
expectType<['xxx', '（YYY）']>(words('xxx&（YYY）'))
expectType<['xxx', '（', 'YYY）']>(words('xxx&（&YYY）'))
expectType<['xxx（）', 'YYY']>(words('xxx（）YYY'))
expectType<['xxx', '（YYY', 'Sussdhq', 'W', 'Wn', '（U（', 'U', 'XH', 'Ssjsh）']>(words('xxx&（YYYSussdhqWWn*@（U（@U@#&XHSsjsh）'))

/**
 * 以下测试用例参考于（https://github.com/lodash/lodash/blob/master/test/words.test.js）
 */
expectType<['12', 'ft']>(words('12ft'));
expectType<['aeiou', 'Are', 'Vowels']>(words('aeiouAreVowels'));
expectType<['enable', '6', 'h', 'format']>(words('enable 6h format'));
expectType<['enable', '24', 'H', 'format']>(words('enable 24H format'));
expectType<['is', 'ISO', '8601']>(words('isISO8601'));
expectType<['LETTERS', 'Aeiou', 'Are', 'Vowels']>(words('LETTERSAeiouAreVowels'));
expectType<['too', 'Legit', '2', 'Quit']>(words('tooLegit2Quit'));
expectType<['walk', '500', 'Miles']>(words('walk500Miles'));
expectType<['xhr', '2', 'Request']>(words('xhr2Request'));
expectType<['XML', 'Http']>(words('XMLHttp'));
expectType<['Xml', 'HTTP']>(words('XmlHTTP'));
expectType<['Xml', 'Http']>(words('XmlHttp'));

expectType<['LETTERS', 'Æiou', 'Are', 'Vowels']>(words('LETTERSÆiouAreVowels'));
expectType<['LETTER', 'Ss', 'Æiou', 'Are', 'Vowels']>(words('LETTERSsÆiouAreVowels'));
expectType<['æiou', 'Are', 'Vowels']>(words('æiouAreVowels'));
expectType<['æiou', '2', 'Consonants']>(words('æiou2Consonants'));

expectType<['1st']>(words('1st'));
expectType<['2nd']>(words('2nd'));
expectType<['3rd']>(words('3rd'));
expectType<['4th']>(words('4th'));