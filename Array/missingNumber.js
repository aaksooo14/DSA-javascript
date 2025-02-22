
const nums = [-3, -2, -1, 0, 1, 3, 4] //[-3, -2, -1, 0, 1, 2,3, 4] = 10-6=4
//8-6=2


function missingNumber(nums) {

    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        for (let i = nums[i]; i <= nums.length; i++) {
            sum2 += nums[i]
        }
    }


    return sum
}

const result = missingNumber(nums)
console.log(result)