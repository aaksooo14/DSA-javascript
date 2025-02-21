
let s = "anagram"
let t = "nagaram"

var isAnagram = function (s, t) {
    let x = s.split('').sort().join('')
    let y = t.split('').sort().join('')
    if (x == y) {
        return true
    } else {
        return false
    }
}

console.log(isAnagram(s, t))