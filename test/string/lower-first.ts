import { expectType } from 'tsd';
import type { LowerFirst } from '../../lib/string/lower-first'

declare function lowerFirst<Str extends string = ''>(str?: Str): LowerFirst<Str>

expectType<''>(lowerFirst())
expectType<'fred'>(lowerFirst('Fred'))
expectType<'fRED'>(lowerFirst('FRED'))
expectType<'_FRED'>(lowerFirst('_FRED'))