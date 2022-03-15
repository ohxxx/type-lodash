/**
 * 英文字符
 * 
 * 可以用来进行英文字符的模式匹配
 */
export type EnglishChars = LowercaseChars | UppercaseChars

/**
 * 小写英文字符
 */
export type LowercaseChars = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' 

/**
 * 大写英文字符
 */
export type UppercaseChars = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

/**
 * HTML实体字符
 */
export type HTMLEntityChars = {
  "&": "&amp;"
  "<": "&lt;"
  ">": "&gt;"
  '"': "&quot;",
  "'": "&apos;" // &#39;
}

/**
 * 阿拉伯数字
 */
export type ArabicFigures = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * ASCII符号
 */
export type ASCIISymbol = ' ' | '!' | '"' | '#' | '$' | '%' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | ']' | '^' | '_' | '`' | '{' | '}' | '|' | '~'