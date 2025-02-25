
let nums = [2, 2, 1, 1, 1, 2, 2]

//1---3
//2---4

function majorityElement(nums) {
    let map = {}
    let max = 0;
    let majority;
    for (let num of nums) {
        map[num] = map[num] ? (map[num] || 0) + 1 : 1
        if (map[num] > max) {
            max = map[num]
            majority = num
        }
    }


    return majority


}

console.log(majorityElement(nums))