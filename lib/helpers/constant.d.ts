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
 * 减号
 */
export type MinusSymbol = '-'

/**
 * 加号
 */
export type PlusSymbol = '+'

/**
 * 数学符号
 */
export type MathSymbol = MinusSymbol | PlusSymbol

/**
 * 名次字符
 */
export type RankChars = '1st' | '2nd' | '3rd' | '4th'

/**
 * 阿拉伯数字
 */
export type ArabicFigures = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * ASCII打印字符
 */
export type ASCIISymbol = ' ' | '!' | '"' | '#' | '$' | '%' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | ']' | '^' | '_' | '`' | '{' | '}' | '|' | '~'

/**
 * 空格
 */
export type Space = ' '

/**
 * 基础类型匹配
 */
export type BaseTypes = {
  // 大写英文
  'uppercase': `${UppercaseChars}`
  // 符号
  'symbol': `${ASCIISymbol}`
}

/**
 * 常规类型合集
 */
export type CombinationTypes = {
  // 符号 + 符号
  'allSymbol': `${ASCIISymbol}${ASCIISymbol}`
  // 数字 + 数字
  'allNumber': `${ArabicFigures}${ArabicFigures}`
  // 大写 + 大写
  'allUppercase': `${UppercaseChars}${UppercaseChars}`
  // 小写 + 小写
  'allLowercase': `${LowercaseChars}${LowercaseChars}`
  // 符号 + 英文
  'symbolEnglish': `${ASCIISymbol}${EnglishChars}`
  // 符号 + 数字
  'symbolNumber': `${ASCIISymbol}${ArabicFigures}`
  // 英文 + 符号
  'englishSymbol': `${EnglishChars}${ASCIISymbol}`
  // 英文 + 数字
  'englishNumber': `${EnglishChars}${ArabicFigures}`
  // 数字 + 符号
  'numberSymbol': `${ArabicFigures}${ASCIISymbol}`
  // 数字 + 英文
  'numberEnglish': `${ArabicFigures}${EnglishChars}`
  // 小写 + 大写
  'lowercaseUppercase': `${LowercaseChars}${UppercaseChars}`
  // 大写 + 小写
  'uppercaseLowercase': `${UppercaseChars}${LowercaseChars}`
}

/**
 * 正则表达式特殊字符
 */
export type RegExpChars = '^' | '$' | '' | '.' | '*' | '+' | '?' | '(' | ')' | '[' | ']' | '{' | '}' | '|' | '\\'