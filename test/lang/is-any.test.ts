import type { Expect, Equal } from '../test'
import type { IsAny } from '../../lib/lang/is-any'

type ResTest = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<'a'>, false>>,
  Expect<Equal<IsAny<[]>, false>>,
  Expect<Equal<IsAny<[1, number, 'xxx']>, false>>,
  Expect<Equal<IsAny<boolean>, false>>,
  Expect<Equal<IsAny<'true' | 'false'>, false>>,
  Expect<Equal<IsAny<true>, false>>,
  Expect<Equal<IsAny<'false'>, false>>,
  Expect<Equal<IsAny<{}>, false>>,
  Expect<Equal<IsAny<Symbol>, false>>
]