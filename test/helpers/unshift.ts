import { expectType } from 'tsd';
import type { Unshift } from '../../lib/helpers/unshift';

declare function unshift<
  Arr extends unknown[],
  Element extends any = unknown
>(A: Arr, E?: Element): Unshift<Arr, Element>

expectType<[unknown]>(unshift([]))
expectType<[unknown, 1, 2, 3]>(unshift([1, 2, 3]))
expectType<['666', 1, 2, 3]>(unshift([1, 2, 3], '666'))