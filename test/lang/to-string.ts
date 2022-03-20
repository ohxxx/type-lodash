import { expectType } from 'tsd';
import { basicData } from './constant'
import type { ToString } from '../../lib/lang/to-string'


expectType<ToString<typeof basicData.null>>('')
expectType<ToString<typeof basicData.undef>>('')
expectType<ToString<''>>('')
expectType<ToString<'6'>>('6')
expectType<ToString<0>>('0')
expectType<ToString<6>>('6')
expectType<ToString<-1>>('-1')
expectType<ToString<false>>('false')
expectType<ToString<[]>>('')
expectType<ToString<['', '', "1"]>>(',,1')
expectType<ToString<['A', 'B']>>('A,B')
expectType<ToString<["A", {'B': 1}]>>('A,[object Object]')
expectType<ToString<["A", typeof basicData.map]>>('A,[object Map]')

// TODO: 待完善
// expectType<ToString<['', '']>>(',')
// expectType<ToString<typeof basicData.symb>>("Symbol('KEY')")
// expectType<ToString<['A', 'B', ['a', 'b']]>>('A,B,a,b')
// expectType<ToString<['A', 'B', ['a', null], undefined]>>('A,B,a,null,undefined')
// expectType<ToString<['A', 'B', ['a', {}]]>>('A,B,a,[object Object]')

expectType<ToString<typeof basicData.obj>>('[object Object]')
expectType<ToString<typeof basicData.map>>('[object Map]')
expectType<ToString<typeof basicData.weakMap>>('[object WeakMap]')
expectType<ToString<typeof basicData.set>>('[object Set]')
expectType<ToString<typeof basicData.weakSet>>('[object WeakSet]')
expectType<ToString<typeof basicData.err>>('Error')
expectType<ToString<'Error'>>('Error')

