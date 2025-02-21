let s = "a good   example"
// Output: "blue is sky the"

function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ')
}

const result = reverseWords(s)
console.log(result)


///\s+/ split based on every posibble space