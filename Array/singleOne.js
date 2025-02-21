var singleNumber = function (nums) {
    let newMap = new Map()
    for (let num of nums) {
        if (!newMap.has(num)) {
            newMap.set(num, 1)
        } else {
            newMap.set(num, (newMap.get(num) || 0) + 1)
        }
    }
    for (let [key, value] of newMap) {
        if (value === 1) {
            return key;  // Return the unique number
        }
    }

};

console.log(singleNumber([4, 1, 2, 1, 2]))