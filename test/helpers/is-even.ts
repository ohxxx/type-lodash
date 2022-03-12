import { expectType } from 'tsd';
import type { IsEven } from '../../lib/helpers/is-even'

expectType<IsEven<0>>(true)
expectType<IsEven<1>>(false)
expectType<IsEven<2>>(true)