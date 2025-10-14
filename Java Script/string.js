// ======================
// ð JavaScript Strings
// ======================

// 1. Strings are sequences of characters, written inside quotes.
//    Example: let str1 = "Hello"; let str2 = 'World'; let str3 = `JS`;

// 2. Strings are immutable ->once created, they cannot be changed.
//    (But you can create a new modified string)

// 3. Length property ->str.length gives total characters.
//    Example: "Hello".length ->5

// 4. Access characters using index (zero-based).
//    Example: str[0] ->'H'

// 5. Escape characters ->use backslash (\) for special characters.
//    Example: "I\'m learning JS", "Line1\nLine2"

// 6. Common String Methods:
//    â¤ toUpperCase()   ->"abc".toUpperCase() ->"ABC"
//    â¤ toLowerCase()   ->"ABC".toLowerCase() ->"abc"
//    â¤ trim()          ->removes spaces from both ends
//    â¤ trimStart(), trimEnd()
//    â¤ charAt(index)   ->character at given index
//    â¤ indexOf("sub")  ->finds first occurrence (returns -1 if not found)
//    â¤ lastIndexOf("sub") ->last occurrence
//    â¤ includes("sub") ->true/false
//    â¤ startsWith("H"), endsWith("d")
//    â¤ slice(start, end) ->extract part of string
//    â¤ substring(start, end) ->similar to slice (no negatives)
//    â¤ substr(start, length) ->extract fixed length (deprecated, but works)
//    â¤ replace("old","new") ->replaces first match
//    â¤ replaceAll("old","new") ->replaces all matches
//    â¤ split(" ")       ->converts string into array
//    â¤ concat(str2)     ->joins strings
//    â¤ repeat(n)        ->repeats string n times

// 7. Template Literals (backticks ``):
//    â¤ Allow multiline strings
//    â¤ Allow embedding variables ->let name="DK"; console.log(`Hello ${name}`);

// 8. Strings can be compared using <, >, ==, === (lexicographic order).
//    Example: "apple" < "banana" ->true

// 9. Escape sequences: \n (newline), \t (tab), \\ (backslash), \" (quote).

// 10. Strings are iterable ->you can loop through each character.
//     Example: for (let ch of "JS") { console.log(ch); }

// ======================
// â­ Key Rule