/**
 * ToLower
 * 
 * It can be done directly with the help of the built-in Lowercase in typescript
 * Here is just an alias function
 * 
 * @example
 * ToLower<'FOO'>
 * >>> foo
 */
export type ToLower<S extends string> = Lowercase<S>