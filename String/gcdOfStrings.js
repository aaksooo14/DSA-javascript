let str1 = "ABCABC"
let str2 = "ABC"

var gcdOfStrings = function (str1, str2) {
    str1.split('')
    let result = []
    let map = {}
    for (let ch of str1) {
        map[ch] = map[ch] ? (undefined || 0) + 1 : 1
    }
    let max = 0;
    for (let [key, value] in map) {
        if (value > max) {
            max = value
        }

    };
    return max
}

console.log(gcdOfStrings(str1, str2))