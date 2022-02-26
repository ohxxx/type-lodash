/**
 * Check if it is of type any
 * 
 * @example
 * IsAny<[]>
 * >>> false
 * 
 */
export type IsAny<T> = 'A' extends ('B' & T) ? true : false