let s = "naya"

function palindromeString(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= 0; j--) {
            if (s[i] !== s[j]) {
                return "not a palindrome"
            } else {
                return "palindrome"
            }
        }
    }
    return s
}

const result = palindromeString(s)
console.log(result)