import { expectType } from 'tsd';
import type { UpperFirst } from '../../lib/string/upper-first'

declare function upperFirst<Str extends string = ''>(str?: Str): UpperFirst<Str>

expectType<''>(upperFirst())
expectType<'Fred'>(upperFirst('fred'))
expectType<'FRED'>(upperFirst('FRED'))
expectType<'_fred'>(upperFirst('_fred'))