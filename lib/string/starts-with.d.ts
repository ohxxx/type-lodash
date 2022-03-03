import type { Split } from "./split"

/**
 * [Step 1]: Build string array
 * 
 * Using the Split method
 */
// type Test = Split<'halo'>
// >>>  ["h", "a", "l", "o"]


/**
 * [Step 2]: Determine whether the first character of the character satisfies the matching condition
 * 
 * @example
 * MatchFirstString<'abc', 'a'>
 * >>> true
 */
// type MatchFirstString<
//   Str extends string,
//   MatchStr extends string
//   > =
//     Str extends `${infer First}${infer Rest}`
//     ? First extends MatchStr
//       ? true
//       : false
//   : false
// type Test1 = MatchFirstString<'abc', 'a'>
// >>> true
// type Test2 = MatchFirstString<'abc', 'c'>
// >>> false


/**
 * [Step 3]: Get the string with the specified subscript
 * 
 * @example
 * GetIndexString<'abc', 1>
 * >>> b
 */
type GetIndexString<
  Str extends string,
  Position extends number = 0,
> =
  Split<Str>[Position] extends string
    ? Split<Str>[Position]
    : null
// type Test = GetIndexString<'abc', 1>
// >>> b


/**
 * [Ultimate]: Checks if string starts with the given target string
 * 
 * Implementation steps:
 *    1、String to Array
 *    2、Get the character at the specified subscript
 *    3、Determine whether the character obtained by the subscript can be assigned to the target matching character
 *        a、Yes - return true
 *        b、No - return false
 * 
 * @example
 * StartsWith<'foobar', 'b', 3>
 * >>> true
 */
export type StartsWith<
  Str extends string,
  Target extends string,
  Position extends number = 0
> = 
  GetIndexString<Str, Position> extends Target
    ? true
    : false
// type Test1 = StartsWith<'abc', 'b', 1>
// >>> true
