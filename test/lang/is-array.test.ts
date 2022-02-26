import type { Expect, Equal } from '../test'
import type { IsArray } from '../../lib/lang/is-array'

type ResTest = [
  Expect<Equal<IsArray<any>, false>>,
  Expect<Equal<IsArray<unknown>, false>>,
  Expect<Equal<IsArray<[]>, true>>,
  Expect<Equal<IsArray<[1, 2]>, true>>,
  Expect<Equal<IsArray<[1, number, 'xxx']>, true>>,
  Expect<Equal<IsArray<{}>, false>>,
  Expect<Equal<IsArray<'a'>, false>>,
  Expect<Equal<IsArray<'false'>, false>>,
  Expect<Equal<IsArray<boolean>, false>>,
  Expect<Equal<IsArray<true>, false>>,
  Expect<Equal<IsArray<'true' | 'false'>, false>>,
  Expect<Equal<IsArray<Symbol>, false>>
]