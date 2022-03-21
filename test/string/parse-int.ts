import { expectType } from 'tsd';
import type { ParseInt } from '../../lib/string/parse-int';

declare function parseInt<Str extends string>(str: Str): ParseInt<Str>

expectType<never>(parseInt(''))
expectType<6>(parseInt('6'))
expectType<6>(parseInt('06'))
expectType<6>(parseInt('6-6'))
expectType<6>(parseInt('  6-6'))
expectType<66>(parseInt('  66'))
expectType<-66>(parseInt('-66'))
expectType<66>(parseInt('+66'))
expectType<6>(parseInt('6。6'))
expectType<6>(parseInt('6.6'))
expectType<0>(parseInt('0.66'))
expectType<never>(parseInt('*66'))
expectType<66>(parseInt('66   99'))
expectType<66>(parseInt('   66   99   '))