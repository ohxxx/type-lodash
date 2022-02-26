import type { IsEqual } from '../lib/lang/is-equal'

/**
 * Check if requirements are met
 * 
 * @example
 * Expect<Equal<true, false>>, true>
 * >>> false
 * 
 */
export type Expect<T extends true> = T
export type Equal<A, B> = IsEqual<A, B>