/**
 * Build string array
 * 
 * @example
 * BuildStringArray<[], 'xxx'>
 * >>> ['xxx']
 */
type BuildStringArray<Arr extends string[], Item extends string> = [...Arr, Item]


/**
 * Splits string by separator
 * 
 * @example
 * Split<'xxx_xxx', '_'>
 * >>> ['xxx', 'xxx']
 */
export type Split<
  Str extends string,
  Delimiter extends string = '',
  Result extends string[] = []
> = 
  Str extends `${infer First}${Delimiter}${infer Rest}`
    ? Split<Rest, Delimiter, BuildStringArray<Result, First>>
    : Str extends Delimiter
      ? Result
      : BuildStringArray<Result, Str>