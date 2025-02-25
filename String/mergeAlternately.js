let word1 = "abcd"
let word2 = "pq"

var mergeAlternately = function (word1, word2) {
    let n = word1.length + word2.length ? word1.length : word2.length//6
    word1.split('') //a b c
    word2.split('') //p q r
    let result = []
    for (let i = 0; i < n; i++) {
        if (word1[i]) {
            result.push(word1[i])
        }
        if (word2[i]) {
            result.push(word2[i])
        }
    }
    return result
};

console.log(mergeAlternately(word1, word2))