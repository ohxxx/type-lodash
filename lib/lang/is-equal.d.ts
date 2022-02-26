/**
 * Check for equality
 * 
 * @example
 * IsEqual<1, 2>
 * >>> false
 */
export type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false