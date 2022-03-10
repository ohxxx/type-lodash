import { expectType } from 'tsd';
import type { Push } from '../../lib/helpers/push';

declare function push<
  Arr extends unknown[],
  Element extends any = unknown
>(A: Arr, E?: Element): Push<Arr, Element>

expectType<[unknown]>(push([]))
expectType<[1, 2, 3, unknown]>(push([1, 2, 3]))
expectType<[1, 2, 3, '666']>(push([1, 2, 3], '666'))
expectType<[1, 2, 3, []]>(push([1, 2, 3], []))