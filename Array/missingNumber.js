
const nums = [0, 1, 3, 4]; //[0,1,2,3,4]=10



function missingNumber(nums) {

    let map = {}
    for (let i = 0; i <= nums.length; i++) {
        map[i] = nums[i]
    }
    return map


    //     let sum = 0;
    //     let sum2 = 0;
    //     for (let i = 0; i < nums.length; i++) {
    //         sum += nums[i]
    //     }

    //     for (let i = 0; i <= nums.length; i++) {
    //         sum2 += i
    //     }
    //     return sum2 - sum
}

const result = missingNumber(nums)
console.log(result)