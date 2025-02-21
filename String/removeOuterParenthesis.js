let s = "(()())(())"

function removeOuterParenthesis(s) {
    let names = []
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')') counter--;
        if (counter !== 0) names.push(s[i])
        if (s[i] == '(') counter++;

    }
    return names.join("")
}

const result = removeOuterParenthesis(s)
console.log(result)

//Time complexity== (O)n
//Space Complexity==(O)n