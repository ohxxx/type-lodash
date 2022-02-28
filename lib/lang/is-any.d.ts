/**
 * Check if type is any
 * 
 * @example
 * IsAny<[]>
 * >>> false
 * 
 */
export type IsAny<T> = 'A' extends ('B' & T) ? true : false