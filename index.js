function firstNonRepeatingChar(str) {
    let map = {}
    for (let ch of str) {
        str[ch] = (str[ch] || 0) + 1
    }

    for
}

console.log(firstNonRepeatingChar("aabbcdd"));