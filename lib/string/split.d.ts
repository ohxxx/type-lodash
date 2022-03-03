/**
 * [Step 1]: Build string array
 * 
 * @example
 * BuildStringArray<[], 'xxx'>
 * >>> ['xxx']
 */
type BuildStringArray<Arr extends string[], Item extends string> = [...Arr, Item]
// type Test = BuildStringArray<[], '1'>
// >>> ['1']


/**
 * [Step 2]: Match Delimiter
 * 
 * @example
 * MatchDelimiter<'0-0', '-'>
 * >>> true
 */
// type MatchDelimiter<
//   Str extends string,
//   Delimiter extends string = ''
// > =
//   Str extends `${infer First}${Delimiter}${infer Rest}`
//     ? true
//     : false
// type Test = MatchDelimiter<'xxx-xxx', '-'>
// >>> true



/**
 * [Ultimate]: Splits string by separator
 * 
 * Implementation steps:
 *    1、Determine if assignable - mixed delimiter strings
 *        a、Yes - recurse string, continue matching
 *        b、No - continue to step 2
 *    2、Determine whether to assign - separate delimiter
 *        a、Yes - returns the current result set
 *        b、No - put the last string into the result set
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