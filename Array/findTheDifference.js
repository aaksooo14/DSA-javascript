
let s = "abcd"
let t = "abcde"

//s = "abcd", t = "abcde"

var findTheDifference = function (s, t) {
    if (s.length + 1 !== t.length) return ""
    let map = {}
    for (let ch of s) {  //O(n)
        map[ch] = (map[ch] || 0) + 1;
    }
    for (let ch of t) {  //O(n)
        if (map[ch] == undefined || map[ch] == 0) return ch;
        map[ch]--;
    }
    return ""

};

console.log(findTheDifference(s, t))