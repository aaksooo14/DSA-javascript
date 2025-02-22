let ransomNote = "aa"
let magazine = "ab"


var canConstruct = function (ransomNote, magazine) {
    let hashMap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        if (!hashMap.has(magazine[i])) {
            hashMap.set(magazine[i], 1)
        } else {
            hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1)
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (hashMap.has(ransomNote[i])) {
            hashMap.set(ransomNote[i], hashMap.get(ransomNote[i]) - 1)
        }
    }

    for (let [key, value] of hashMap) {
        if (value == 0) {
            return true
        } else {
            return false
        }
    }


};

console.log(canConstruct(ransomNote, magazine))