//nums = [2,2,3,1] ==>1
//nums = [1,2]  ==>2
let nums = [2, 2, 3, 1]

var thirdMax = function (nums) {
    let temp = nums.sort((a, b) => b - a) //3 2 2 1
    let s = new Set(temp)  //3 2 1
    let result = []
    s.forEach(value => {
        result.push(value)  //[3,2,1]
    });
    if (result.length < 3) {
        return result[0]
    } else {
        return result[2]
    }
};

console.log(thirdMax(nums))