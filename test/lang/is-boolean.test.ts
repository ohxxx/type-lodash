import type { Expect, Equal } from '../test'
import type { IsBoolean } from '../../lib/lang/is-boolean'

type ResTest = [
  Expect<Equal<IsBoolean<any>, false>>,
  Expect<Equal<IsBoolean<unknown>, false>>,
  Expect<Equal<IsBoolean<true>, true>>,
  Expect<Equal<IsBoolean<false>, true>>,
  Expect<Equal<IsBoolean<'false'>, false>>,
  Expect<Equal<IsBoolean<true | false>, true>>,
]