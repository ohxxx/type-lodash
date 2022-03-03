/**
 * ToUpper
 * 
 * It can be done directly with the help of the built-in Uppercase in typescript
 * Here is just an alias function
 * 
 * @example
 * ToUpper<'foo'>
 * >>> FOO
 */
export type ToUpper<S extends string> = Uppercase<S>