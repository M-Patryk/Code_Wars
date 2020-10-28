// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct (odrębne) letters,
// each taken only once - coming from s1 or s2.

// Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
c = "loopingisfunbutdangerous"
d = "lessdangerousthancoding"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    s = s1 + s2
    s = s.split('').sort()
    s = [...new Set(s)].join('')
    return s
}

//One liner
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')