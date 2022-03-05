import { expectError, expectType } from 'tsd'
import type { Split } from '../../lib/string/split'

declare function split<
  S extends string,
  D extends string
>(string: S, delimiter: D): Split<S, D>

expectType<['x', 'x', 'x']>(split('xxx', '')) 
expectType<['x', 'x', 'x']>(split('x-x-x', '-')) 
expectType<['x_x', 'x']>(split('x_x-x', '-')) 
expectType<['x_x', 'x', '']>(split('x_x-x-', '-')) 
expectType<['', 'x', '_', 'x', 'x']>(split('-x-_-x-x', '-')) 
expectType<['', '']>(split('_', '_')) 
expectType<['']>(split('', ' ')) 
expectType<[]>(split('', '')) 


expectError(split())
expectError(split(123, 2))
expectError(split('123'))